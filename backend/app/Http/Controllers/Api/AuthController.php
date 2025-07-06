<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Pengguna;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\LoginResource;
use App\Http\Resources\ProfileResource;

class AuthController extends Controller
{

    public function profile(Request $request)
{
    $users = Pengguna::with([
        'wallets',
        'scoreUsers.season',
        'tasks' => function ($query) {
            $query->withPivot('status', 'completed_at')->withTimestamps();
        }
    ])->get();

    return ProfileResource::collection($users);
}


public function All(Request $request)
{
    // Ambil semua user beserta relasi yang diperlukan tanpa perlu login
    $users = Pengguna::with([
        'wallets',
        'scoreUsers.season',
        'tasks' => function ($query) {
            $query->withPivot('status', 'completed_at')
                  ->withTimestamps();
        }
    ])->get();

    $allData = $users->map(function ($user) {
        $data = [
            'user' => $user,
            'wallets' => $user->wallets,
            'scoreUsers' => $user->scoreUsers->map(function ($scoreUser) {
                return [
                    'season' => $scoreUser->season,
                    'total_score' => $scoreUser->total_score,
                ];
            }),
            'tasks' => $user->tasks->map(function ($task) {
                return [
                    'id' => $task->id,
                    'status' => $task->pivot->status,
                    'completed_at' => $task->pivot->completed_at,
                ];
            }),
        ];

        return array_merge($data['user']->toArray(), $data);
    });

    return response()->json($allData);
}

public function users(Request $request)
{
    // Ambil semua user beserta relasi yang diperlukan tanpa perlu login
    $users = Pengguna::with([
        'wallets',
        'scoreUsers.season',
        'tasks' => function ($query) {
            $query->withPivot('status', 'completed_at')
                  ->withTimestamps();
        }
    ])->get();

    return ProfileResource::collection($users);
}
public function backupusers(Request $request)
{
    // Ambil semua user beserta relasi yang diperlukan tanpa perlu login
    $users = Pengguna::with([
        'wallets',
        'scoreUsers.season',
        'tasks' => function ($query) {
            $query->withPivot('status', 'completed_at')
                  ->withTimestamps();
        }
    ])->get();

    $allData = $users->map(function ($user) {
    return [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,

        'wallets' => $user->wallets->map(fn($w) => [
            'id' => $w->id,
            'saldo' => $w->saldo,
        ]),

        'score_users' => $user->scoreUsers->map(function ($scoreUser) {
            return [
                'season' => [
                    'id' => $scoreUser->season->id,
                    'nama' => $scoreUser->season->nama,
                ],
                'total_score' => $scoreUser->total_score,
            ];
        }),

        'tasks' => $user->tasks->map(function ($task) {
            return [
                'id' => $task->id,
                'title' => $task->title,
                'tipe' => $task->tipe,
                'status' => $task->pivot->status,
                'completed_at' => $task->pivot->completed_at,
            ];
        }),
    ];
});


    return response()->json($allData);
}
    //login
    public function login(LoginRequest $request)
    {
        //validate dengan Auth::attempt
        if (Auth::attempt($request->only('email', 'password'))) {
            //jika berhasil buat token
            $user = User::where('email', $request->email)->first();
            //token lama dihapus
            $user->tokens()->delete();
            //token baru di create
            $abilities = $user->getAllPermissions()->pluck('name')->toArray();
            // Filter abilities containing ':' and cut any string after '_'
            $abilities = array_map(function ($ability) {
                return explode('_', $ability)[0];
            }, array_filter($abilities, function ($ability) {
                return strpos($ability, ':') !== false;
            }));
            //create token with abilities
            $token = $user->createToken('token', $abilities)->plainTextToken;

            return new LoginResource([
                'token' => $token,
                'user' => $user
            ]);
        } else {
            //jika gagal kirim response error
            return response()->json([
                'message' => 'Invalid Credentials'
            ], 401);
        }
    }

    //register
    // public function register(RegisterRequest $request)
    // {
    //     //save user to user table
    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password)
    //     ]);

    //     $token = $user->createToken('token')->plainTextToken;
    //     //return token
    //     return new LoginResource([
    //         'token' => $token,
    //         'user' => $user
    //     ]);
    // }

    // Get all users


    //logout
    public function logout(Request $request)
    {
        //hapus semua tuken by user
        $request->user()->tokens()->delete();
        //response no content
        return response()->noContent();
    }    //
}
