<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Traits\UploadImageTrait;
use Illuminate\Http\Response;

class BrandController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Brand::latest()->get(['id', 'name', 'slug', 'image', 'status',]);
        if (count($data) > 0) {
            return Response::success($data);
        }
        return Response::notFound();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBrandRequest $request)
    {
        $image = $this->uploadImage($request, 'image', 'brands');
        $data = Brand::create(array_merge($request->validated(), ['image' => $image]));
        return Response::created($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $brand = Brand::find($id);
        if ($brand) {
            return Response::success($brand);
        }
        return Response::notFound();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBrandRequest $request, $id)
    {
        $brand = Brand::find($id);
        $image = $this->uploadImage(request: $request, directory: 'brands', existingFilePath: $brand->image);
        $brand->update(array_merge($request->validated(), ['image' => $image]));
        return Response::success($brand);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $brand = Brand::find($id);
        $this->deleteImage($brand->image);
        $brand->delete();
        return Response::success(message: 'Brand deleted');
    }
}
