<?php

namespace App\Actions;

use App\Models\Group;
use \Cviebrock\EloquentSluggable\Services\SlugService;
use App\Http\Resources\GroupResource;

class GroupAction
{

    public $model;

    public function __construct(Group $model)
    {
       $this->model = $model;
    }

    //create
    public function create($request)
    {
        $group = $this->model->create([
            'user_id' => auth()->user()->id,
            'name' => $request->name,
            'description' => $request->description,
            'slug' => SlugService::createSlug($this->model, 'slug', $request->name)
        ]);
        if ($group) {
            return response()->json([
                'message' => 'Group created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create group'
           ], 400);
        }
    }

    //all
    public function all()
    {
      $groups = $this->model->with(['user'])->latest()->paginate(20);
      if (count($groups) < 1) {
        return response()->json([
            'message' => 'Sorry no group found'
        ], 400);
      }else {
        return GroupResource::collection($groups);
      }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $group = $this->model->with(['user'])->find($id);
          return new GroupResource($group);
      }else {
        return response()->json([
            'message' => 'Sorry this group do not exist'
        ], 400);
      }
    }

    //add user to group
    public function attachUserToGroup($request)
    {
        $data = $this->model->where('id', '=', $request->group_id)->exists();
        if ($data) {
            $group = $this->model->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
            $group->group_users()->attach($request->user_id);
            return response()->json([
                'message' => 'User added to group successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }

     //add user to group
     public function attachFileToGroup($request)
     {
         $data = $this->model->where('id', '=', $request->group_id)->exists();
         if ($data) {
             $group = $this->model->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
             $group->group_files()->attach($request->file_id);
             return response()->json([
                 'message' => 'File added to group successfully'
             ], 200);
         }else {
             return response()->json([
                 'message' => 'Sorry this data do not exist'
             ], 404);
         }
     }

     //attach tag
     public function attachTagToGroup($request)
     {
        $data = $this->model->where('id', '=', $request->group_id)->exists();
        if ($data) {
            $group = $this->model->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
            $group->group_tags()->attach($request->tag_id);
            return response()->json([
                'message' => 'Tag added to group successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
     }

    //remove user from group
    public function removeUserFromGroup($request)
    {
        $data = $this->model->where('id', '=', $request->id)->exists();
        if ($data) {
            $group = $this->model->where('id', '=', $request->id)->where('user_id', auth()->user()->id)->first();
            $group->group_users()->detach($request->user_id);
            return response()->json([
                'message' => 'Contact removed from group successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $group = $this->model->find($id);
            $group->slug = null;
            $update = $group->update([
             'name' => empty($request->name) ? $group->name : $request->name,
             'description' =>   empty($request->description) ? $group->description : $request->description,

            ]);
            if ($update) {
                return response()->json([
                 'message' => 'Group updated successfully'
                ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update group'
              ], 400);
           }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete =  $this->model->find($id)->delete();
            if ($delete) {
              return response()->json([
                   'message' => 'Group deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete group'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this group do not exist'
          ], 404);
        }
    }

}
