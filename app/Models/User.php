<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Models\Concerns\UsesUuid;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class User extends Authenticatable implements  MustVerifyEmail, JWTSubject
{
    use HasFactory, Notifiable, UsesUuid, SoftDeletes, CascadeSoftDeletes, Sluggable;

    protected $fillable = [
        'name',  'email','password','phone','facebook','twitter','linkedin','image_path','slug', 'email_verified_at',
        'address', 'username'
    ];

    protected $cascadeDeletes = ['roles'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function roles() {
        return $this->belongsToMany(Role::class);
    }

    public function user_groups() {
        return $this->belongsToMany(Group::class);
    }

    public function groups() {
        return $this->hasMany(Group::class);
    }

    public function files() {
        return $this->hasMany(File::class);
    }

    public function user_files() {
        return $this->belongsToMany(File::class);
    }

    public function tags() {
        return $this->hasMany(Tags::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
