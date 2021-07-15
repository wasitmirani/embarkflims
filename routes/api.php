<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('user')->group(function () {
    Route::get('/users',[UserController::class,"getUsers"]);
});

Route::post('/create/project',[ProjectController::class,'storeProject']);
Route::post('/update/project',[ProjectController::class,'updateProject']);
Route::get('/projects',[ProjectController::class,'getProjects']);
Route::get('/daily/projects',[ProjectController::class,'getDailyProjects']);

Route::get('/project/{id}',[ProjectController::class,'getProject']);

Route::prefix('portal')->group(function () {
    Route::get('/services',[ServiceController::class,'getServices']);
    Route::prefix('service')->group(function () {
        Route::post('/store',[ServiceController::class,'storeService']);
    });
});
