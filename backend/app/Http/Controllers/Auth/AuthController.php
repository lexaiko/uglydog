<?php

namespace App\Http\Controllers\Auth;

use App\Models\Pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (!Auth::guard('pengguna')->attempt($credentials)) {
        return response()->json(['message' => 'Login gagal'], 401);
    }

    $request->session()->regenerate();

    return response()->json(['message' => 'Login sukses']);
}

    public function logout(Request $request)
{
    Auth::guard('pengguna')->logout(); // <-- Penting!

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return response()->json(['message' => 'Logout sukses']);
}


    public function me(Request $request)
    {
        return response()->json(Auth::guard('pengguna')->user());
    }


public function users(Request $request)
{
    $user = $request->user()->load('wallets');
    return response()->json([
        'user' => $user
    ]);
}
}
