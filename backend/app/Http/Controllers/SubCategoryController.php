<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use App\Http\Requests\StoreSubCategoryRequest;
use App\Http\Requests\UpdateSubCategoryRequest;
use App\Traits\UploadImageTrait;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class SubCategoryController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = SubCategory::latest()->get(['id', 'name', 'slug', 'image', 'status',]);
        if (count($data) > 0) {
            return Response::success($data);
        }
        return Response::notFound();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubCategoryRequest $request)
    {
        $image = $this->uploadImage($request, 'image', 'sub-categories');
        $data = SubCategory::create(array_merge($request->validated(), ['image' => $image]));
        return Response::created($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $subCategory = SubCategory::find($id);
        if ($subCategory) {
            return Response::success($subCategory);
        }
        return Response::notFound();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubCategoryRequest $request, $id)
    {
        $subCategory = SubCategory::find($id);
        $image = $this->uploadImage(request: $request, directory: 'sub-categories', existingFilePath: $subCategory->image);
        $subCategory->update(array_merge($request->validated(), ['image' => $image]));
        return Response::success($subCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $subCategory = SubCategory::find($id);
        $this->deleteImage($subCategory->image);
        $subCategory->delete();
        return Response::success(message: 'SubCategory deleted successfully');
    }
}
