<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\StoreProductImageRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Traits\UploadImageTrait;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::with('productImages','category','subCategory','brand')->latest()->paginate(10);

        return Response::success($product);
    }

    // public function index()
    // {
    //     $products = Product::with(['productImages', 'category', 'subCategory', 'brand'])
    //         ->latest()
    //         ->paginate(10);

    //     return Response::success($products->map(function ($product) {
    //         return [
    //             'id' => $product->id,
    //             'name' => $product->name,
    //             'old_price' => $product->old_price,
    //             'new_price' => $product->new_price,
    //             'description' => $product->description,
    //             'quantity' => $product->quantity,
    //             'discount' => $product->discount,
    //             'product_images' => $product->productImages->map(function ($image) {
    //                 return [
    //                     'id' => $image->id,
    //                     'product_id' => $image->product_id,
    //                     'image_url' => asset('storage/' . $image->image_path),
    //                 ];
    //             }),
    //             'created_at' => $product->created_at,
    //             'updated_at' => $product->updated_at,
    //         ];
    //     }));
    // }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $productRequest, StoreProductImageRequest $imageRequest)
    {
        DB::beginTransaction();

        try {
            // Create the product first
            $product = Product::create($productRequest->validated());

            // Upload images using the trait
            $images = $this->uploadImages($imageRequest, 'images', 'products');

            // Save each uploaded image to the ProductImage table
            foreach ($images as $imagePath) {
                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $imagePath,
                ]);
            }

            DB::commit();
            return Response::created($product);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $this->deleteImage($product->image);
        $product->delete();
        return Response::success(message: 'Product deleted successfully');
    }
}
