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
    // public function store(StorecategoryRequest $request)
    // {
    //     $image = $this->uploadImage(request: $request, directory: 'categories');
    //     return $image;
    //     Category::create($request->validated() + ['image' => $image]);
    //     return Response::created();
    // }
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

        // Create the category with the uploaded image path
        $category = Category::create($request->validated() + ['image' => $image]);

        // Return a success response
        return response()->json([
            'status' => true,
            'message' => 'Category created successfully',
            'data' => $category,
        ], 201);
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
        $category->update($request->validated());
        return Response::success($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return Response::success(message: 'Category deleted successfully');
    }
}
