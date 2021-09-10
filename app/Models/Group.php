<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Group extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name', 'description', 'slug', 'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function group_users() {
        return $this->belongsToMany(User::class);
    }

    public function group_files() {
        return $this->belongsToMany(File::class);
    }

    public function group_tags() {
        return $this->belongsToMany(Tag::class);
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
