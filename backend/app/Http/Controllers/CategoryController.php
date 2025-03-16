<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorecategoryRequest;
use App\Http\Requests\UpdatecategoryRequest;
use App\Models\Category;
use App\Traits\UploadImageTrait;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Category::latest()->get(['id', 'name', 'slug', 'image', 'description', 'status',]);
        return Response::success($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorecategoryRequest $request)
    {

        if (!Auth::check()) {
            return response()->json([
                'status' => false,
                'message' => 'You are not logged in',
            ], 400);
        }

        // Upload the image


        $image = $this->uploadImage(request: $request, directory: 'categories');
        Category::create($request->validated() + ['image' => $image]);
        return Response::created();
    }


    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecategoryRequest $request, Category $category)
    {
        $image = $this->uploadImage(request: $request, directory: 'categories', existingFilePath: $category->image);
        $category->update($request->validated() + ['image' => $image]);
        return Response::success($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $this->deleteImage($category->image);
        $category->delete();
        return Response::success(message: 'Category deleted successfully');
    }
}
