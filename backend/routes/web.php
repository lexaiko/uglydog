<?php

use App\Filament\Pages\Login;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

Route::get('/admin/login', Login::class)->name('filament.admin.auth.login');

Route::middleware('web')->prefix('auth')->group(function () {
    Route::get('/me', [AuthController::class, 'me'])->middleware('auth');
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');
    Route::get('/users', [AuthController::class, 'users'])->middleware('auth');
});
// Route::get('/', function () {
//     return view('welcome');
// });
