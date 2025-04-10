<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\OrderProductRequest;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\StoreProductImageRequest;
use App\Http\Requests\Product\UpdateProductImage;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\BillingDetails;
use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Traits\UploadImageTrait;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\FuncCall;

class ProductController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::with('productImages', 'category', 'subCategory', 'brand')->latest()->paginate(10);
        return Response::success($product);
    }

    public function latest_products()
    {
        $product = Product::with('category', 'subCategory', 'brand')
            ->latest()
            ->take(6)
            ->get();
        return Response::success($product);
    }





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
    public function update($id, StoreProductRequest $productRequest, StoreProductImageRequest $imageRequest)
    {
        DB::beginTransaction();

        try {

            $product = Product::findOrFail($id);


            $product->update($productRequest->validated());

            if ($imageRequest->hasFile('images')) {
                ProductImage::where('product_id', $product->id)->delete();

                $images = $this->uploadImages($imageRequest, 'images', 'products');

                foreach ($images as $imagePath) {
                    ProductImage::create([
                        'product_id' => $product->id,
                        'image_path' => $imagePath,
                    ]);
                }
            }

            DB::commit();

            return Response::success($product, "Product updated successfully");
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
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




    public function product_order(OrderProductRequest $orderProductRequest)
    {
        $order = $orderProductRequest->validated();
        DB::beginTransaction();

        try {
            $user = auth()->user();

            $totalAmount = 0;

            foreach ($orderProductRequest->products as $item) {
                $product = Product::findOrFail($item['product_id']);
                $totalAmount += $product->new_price * $item['quantity'];
            }


            $order = Order::create([
                'user_id' => $user->id,
                'total' => $totalAmount,
                'status' => 'pending',
            ]);


            foreach ($orderProductRequest->products as $item) {
                $product = Product::findOrFail($item['product_id']);

                OrderDetails::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'price' => $product->new_price,
                ]);
            }


            BillingDetails::create([
                'order_id' => $order->id,
                'payment_method' => $orderProductRequest->payment_method,
                'is_paid' => $orderProductRequest->payment_method !== 'COD',
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Order placed successfully!',
                'order_id' => $order->id,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Order failed',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
