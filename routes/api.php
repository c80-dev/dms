<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['middleware' => 'api', 'prefix' => 'v0.01'], function ($router) {

    Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'login']);
        Route::post('/create-account', [App\Http\Controllers\Api\UserController::class, 'createUser']);

    Route::post('/forgot-password-link', [App\Http\Controllers\Api\ResetPasswordController::class, 'send'])->name('password.email');
        Route::post('/reset-password', [App\Http\Controllers\Api\ResetPasswordController::class, 'reset'])->name('password.update');

    Route::get('/verify-account', [App\Http\Controllers\Api\EmailVerificationController::class, 'verify']);

    Route::group(['middleware' => ['jwt.verify']], function() {

        //user routes
        Route::group(['middleware' => ['user']], function () {

            //groups
            Route::get('/groups', [App\Http\Controllers\Api\GroupController::class, 'index']);
                Route::get('/groups/{id}', [App\Http\Controllers\Api\GroupController::class, 'show']);
                Route::post('/groups', [App\Http\Controllers\Api\GroupController::class, 'store']);
                Route::patch('/groups/{id}', [App\Http\Controllers\Api\GroupController::class, 'update']);
                Route::delete('/groups/{id}', [App\Http\Controllers\Api\GroupController::class, 'destroy']);

              //groups
            Route::get('/tags', [App\Http\Controllers\Api\TagController::class, 'index']);
                Route::get('/tags/{id}', [App\Http\Controllers\Api\TagController::class, 'show']);
                Route::post('/tags', [App\Http\Controllers\Api\TagController::class, 'store']);
                Route::patch('/tags/{id}', [App\Http\Controllers\Api\TagController::class, 'update']);
                Route::delete('/tags/{id}', [App\Http\Controllers\Api\TagController::class, 'destroy']);


            //auth routes
            Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
                Route::post('/refresh', [App\Http\Controllers\Api\AuthController::class, 'refresh']);
                Route::get('/user-profile', [App\Http\Controllers\Api\AuthController::class, 'userProfile']);
                Route::patch('/change-password/{id}', [App\Http\Controllers\Api\UserController::class, 'changePassword']);
                Route::patch('/update-profile/{id}', [App\Http\Controllers\Api\UserController::class, 'updateUserAcount']);

            //users routes
            Route::get('/users', [App\Http\Controllers\Api\UserController::class, 'index']);
                Route::get('/users/{id}', [App\Http\Controllers\Api\UserController::class, 'show']);

        });//end of users routes

        //only admin secured routes
        Route::group(['middleware' => ['admin']], function () {
            //settings routes
            Route::apiResource('/settings', App\Http\Controllers\Api\SettingController::class);
              Route::delete('/delete-user/{id}', [App\Http\Controllers\Api\AuthController::class, 'delete']);

            Route::get('/run-migrations', function () {
                return Artisan::call('migrate', ["--force" => true ]);
            });

        });//end of admin routes

    });//jwt verifired routes

});
