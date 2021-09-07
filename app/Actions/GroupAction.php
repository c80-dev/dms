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
          $group = $this->model->find($id);
          return new GroupResource($group);
      }else {
        return response()->json([
            'message' => 'Sorry this group do not exist'
        ], 400);
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
