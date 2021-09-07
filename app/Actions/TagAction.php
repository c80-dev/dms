<?php

namespace App\Actions;

use App\Models\Tag;
use \Cviebrock\EloquentSluggable\Services\SlugService;
use App\Http\Resources\TagResource;

class TagAction
{

    public $model;

    public function __construct(Tag $model)
    {
       $this->model = $model;
    }

    //create
    public function create($request)
    {
        $tag = $this->model->create([
            'user_id' => auth()->user()->id,
            'name' => $request->name,
            'description' => $request->description,
            'slug' => SlugService::createSlug($this->model, 'slug', $request->name)
        ]);
        if ($tag) {
            return response()->json([
                'message' => 'Tag created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create tag'
           ], 400);
        }
    }

    //all
    public function all()
    {
      $tags = $this->model->with(['user'])->latest()->paginate(20);
      if (count($tags) < 1) {
        return response()->json([
            'message' => 'Sorry no Tag found'
        ], 400);
      }else {
        return TagResource::collection($tags);
      }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $tag = $this->model->find($id);
          return new TagResource($tag);
      }else {
        return response()->json([
            'message' => 'Sorry this Tag do not exist'
        ], 400);
      }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $tag = $this->model->find($id);
            $tag->slug = null;
            $update = $tag->update([
             'name' => empty($request->name) ? $tag->name : $request->name,
             'description' =>   empty($request->description) ? $tag->description : $request->description,

            ]);
            if ($update) {
                return response()->json([
                 'message' => 'Tag updated successfully'
                ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update tag'
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
                   'message' => 'Tag deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete tag'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }

}
