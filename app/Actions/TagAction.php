<?php

namespace App\Actions;

use App\Models\Tag;
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
            'name' => "#".$request->name,
            'description' => $request->description
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
      $tags = $this->model->with(['user'])->latest()->paginate(10);
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
          $tag = $this->model->with(['user'])->find($id);
          return new TagResource($tag);
      }else {
        return response()->json([
            'message' => 'Sorry this Tag do not exist'
        ], 400);
      }
    }

    //add user to tag
    public function attachUserToTag($request)
    {
        $data = $this->model->where('id', '=', $request->tag_id)->exists();
        if ($data) {
            $tag = $this->model->where('id', '=', $request->tag_id)->where('user_id', auth()->user()->id)->first();
            $tag->tag_users()->attach($request->user_id);
            return response()->json([
                'message' => 'User added to tag successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }
    
    //add user to tag
    public function attachFileToTag($request)
    {
        $data = $this->model->where('id', '=', $request->tag_id)->exists();
        if ($data) {
            $tag = $this->model->where('id', '=', $request->tag_id)->where('user_id', auth()->user()->id)->first();
            $tag->tag_files()->attach($request->file_id);
            return response()->json([
                'message' => 'File added to tag successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }
    
    //attach tag
    public function attachtagToTag($request)
    {
        $data = $this->model->where('id', '=', $request->tag_id)->exists();
        if ($data) {
            $tag = $this->model->where('id', '=', $request->tag_id)->where('user_id', auth()->user()->id)->first();
            $tag->tag_groups()->attach($request->tag_id);
            return response()->json([
                'message' => 'Tag added to tag successfully'
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
