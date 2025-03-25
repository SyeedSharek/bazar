<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\{BrandController, CategoryController, SubCategoryController};
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\RolePermissionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group([
    'middleware' => 'jwt:api',
    'prefix' => 'auth'
], function () {
    Route::post('/register', [AuthController::class, 'register'])->withoutMiddleware('jwt:api');
    Route::post('/login', [AuthController::class, 'login'])->withoutMiddleware('jwt:api');
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/profile', [AuthController::class, 'profile']);


    //Role Permission
    Route::get('/allrole', [RolePermissionController::class, 'allrole']);
    Route::get('/allpermission', [RolePermissionController::class, 'allpermisisions']);
    Route::post('/addrole', [RolePermissionController::class, 'addRole']);
});

Route::middleware(['jwt:api'])->group(function () {
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('subcategories', SubCategoryController::class);
    Route::apiResource('brand', BrandController::class);
    Route::apiResource('products', ProductController::class);
});

// Frontend Api
Route::get('frontend/categories', [CategoryController::class, 'all_category']);
