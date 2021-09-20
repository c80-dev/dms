<?php

namespace App\Helpers;

use App\Models\File;
use App\Models\User;
use App\Models\Group;
use App\Models\Tag;

class Helper
{
    public function dashbaordMatix()
    {
        return response()->json([
            'users' =>  User::count(),
            'files' =>  File::count(),
            'groups' =>  Group::count(),
            'tags' => Tag::count()
        ], 200);
    }

    public function attachmentHelper()
    {
        return response()->json([
            'users' =>  User::all(),
            'files' =>  File::all(),
            'groups' =>  Group::all(),
            'tags' => Tag::all()
        ], 200);
    }

}
