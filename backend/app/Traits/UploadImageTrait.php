<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver; // Add this line
use Illuminate\Http\UploadedFile;

trait UploadImageTrait
{
    /**
     * Handle the image upload process.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $fieldName
     * @param string $directory
     * @param string|null $existingFilePath
     * @return string|null
     */
    public function uploadImage($request, string $fieldName = 'image', string $directory = 'images', ?string $existingFilePath = null): ?string
    {
        if (!$request->hasFile($fieldName)) {
            return null;
        }

        $file = $request->file($fieldName);
        return $this->processImage($file, $directory, $existingFilePath);
    }

    /**
     * Upload multiple images.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $fieldName
     * @param string $directory
     * @return array
     */
    public function uploadImages($request, string $fieldName = 'images', string $directory = 'images'): array
    {
        if (!$request->hasFile($fieldName)) {
            return [];
        }

        $imagePaths = [];
        foreach ($request->file($fieldName) as $file) {
            $imagePath = $this->processImage($file, $directory);
            if ($imagePath) {
                $imagePaths[] = $imagePath;
            }
        }

        return $imagePaths;
    }

    /**
     * Process and save the image.
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param string|null $existingFilePath
     * @return string|null
     */
    protected function processImage(UploadedFile $file, string $directory, ?string $existingFilePath = null): ?string
    {
        if (!$file->isValid()) {
            return null;
        }

        // Delete the existing file if it exists
        if ($existingFilePath) {
            Storage::disk('public')->delete($existingFilePath);
        }

        // Ensure the directory exists
        if (!Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }

        // Generate unique filename
        $fileName = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = "{$directory}/{$fileName}";

        // Initialize ImageManager with the GD driver
        $manager = new ImageManager(new Driver()); // Use the GD driver
        $image = $manager->read($file); // This creates the image instance
        $image->save(storage_path("app/public/{$path}"), 50); // Adjust quality as needed

        return $path;
    }

    /**
     * Delete an image.
     *
     * @param string|null $image
     * @return void
     */
    public function deleteImage(?string $image): void
    {
        if ($image) {
            Storage::disk('public')->delete($image);
        }
    }
}
