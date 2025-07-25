<?php
// app/Models/SocialitePengguna.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialitePengguna extends Model
{
    protected $fillable = ['user_id', 'provider', 'provider_id'];

    public function user()
    {
        return $this->belongsTo(Pengguna::class, 'user_id');
    }
}
