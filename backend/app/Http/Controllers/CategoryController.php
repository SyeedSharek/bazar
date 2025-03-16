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
        if (count($data) > 0) {
            return Response::success($data);
        }
        return Response::notFound();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorecategoryRequest $request)
    {
        $image = $this->uploadImage($request, 'image', 'categories');
        $data = Category::create(array_merge($request->validated(), ['image' => $image]));
        return Response::created($data);
    }


    public function show($id)
    {
        $category = Category::find($id);
        if ($category) {
            return Response::success($category);
        }
        return Response::notFound();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecategoryRequest $request, Category $category)
    {
        $image = $this->uploadImage(request: $request, directory: 'categories', existingFilePath: $category->image);
        $category->update(array_merge($request->validated(), ['image' => $image]));
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
