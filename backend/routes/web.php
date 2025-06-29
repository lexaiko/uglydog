<?php

use Illuminate\Support\Facades\Route;
use App\Filament\Pages\Login;

Route::get('/admin/login', Login::class)->name('filament.admin.auth.login');


// Route::get('/', function () {
//     return view('welcome');
// });
