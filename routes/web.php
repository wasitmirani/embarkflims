<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\FreelancerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[FrontendController::class,'index']);

Auth::routes();



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::prefix('freelancer')->group(function () {
    Route::get('login',[FrontendController::class,'showLogin'])->name('show.login');

});


Route::resource('freelancer',FreelancerController::class);
Route::get('profile',[HomeController::class,'profile'])->name('profile.setting.form');
Route::get('/edit/profile',[UserController::class,'edit_profile'])->name('edit.profile');
Route::post('/update/profile',[UserController::class,'update_profile'])->name('update.profile');





Route::prefix('customer')->group(function(){

    Route::resource('customer',FreelancerController::class);

});
