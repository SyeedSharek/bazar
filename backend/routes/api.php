<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RolePermissionController;
use App\Http\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api');
    Route::post('/profile', [AuthController::class, 'profile'])->middleware('auth:api');


    //Role Permission
    Route::get('/allrole', [RolePermissionController::class, 'allrole']);
    Route::get('/allpermission', [RolePermissionController::class, 'allpermisisions']);
    Route::post('/addrole', [RolePermissionController::class, 'addRole']);
});

Route::middleware('auth:api', Authenticate::class)->group(function () {
    Route::apiResource('categories', CategoryController::class);
});
