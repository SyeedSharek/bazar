<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\{CategoryController, SubCategoryController};
use App\Http\Controllers\RolePermissionController;
use App\Http\Middleware\Authenticate;
use Faker\Guesser\Name;
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
    Route::post('/profile', [AuthController::class, 'profile']);


    //Role Permission
    Route::get('/allrole', [RolePermissionController::class, 'allrole']);
    Route::get('/allpermission', [RolePermissionController::class, 'allpermisisions']);
    Route::post('/addrole', [RolePermissionController::class, 'addRole']);
});

Route::middleware(['jwt:api'])->group(function () {
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('subcategories', SubCategoryController::class);
});
