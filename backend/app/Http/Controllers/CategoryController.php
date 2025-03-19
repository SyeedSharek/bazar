<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorecategoryRequest;
use App\Http\Requests\UpdatecategoryRequest;
use App\Models\Category;
use App\Traits\UploadImageTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $paginate = $request->query('paginate');
        if ($paginate) {
            $data = Category::latest()->select(['id', 'name', 'slug', 'image', 'description', 'status'])->paginate($paginate);
            return Response::success($data);
        }
        if ($request->query('query') === "subcategories") {
            $data = Category::with('subCategories:id,category_id,name,slug,image,status')->latest()->get(['id', 'name', 'slug', 'image', 'description', 'status',]);
            return Response::success($data);
        }

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
