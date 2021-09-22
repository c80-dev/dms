<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;

class File extends Model
{
    use HasFactory, Sluggable, SoftDeletes;

    protected $fillable = [
      'name', 'description', 'tag_id', 'file_path', 'slug', 'user_id'
    ];

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function file_groups() {
        return $this->belongsToMany(Group::class);
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
