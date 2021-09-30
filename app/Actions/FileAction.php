<?php

namespace App\Actions;

use App\Models\File;
use App\Http\Resources\FileResource;
use App\Helpers\FileProcessing;
use Illuminate\Support\Facades\Storage;

class FileAction
{

    public $model;
    public $fileProcessing;

    public function __construct(File $model, FileProcessing $fileProcessing)
    {
       $this->model = $model;
       $this->fileProcessing = $fileProcessing;
    }

    //create
    public function create($request)
    {
        $File = $this->model->create([
            'user_id' => auth()->user()->id,
            'tag_id' => $request->tag_id,
            'name' => $request->name,
            'description' => $request->description,
            'file_path' => $this->fileProcessing->file_processing($request, 'file_path')
        ]);
        if ($File) {
            return response()->json([
                'message' => 'File created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create File'
           ], 400);
        }
    }

    //all
    public function all()
    {
        $user_roles = auth()->user()->roles->pluck('name');
        if ($user_roles[0] == 'Admin') {
                $files = $this->model->with(['user','tag'])->latest()->paginate(20);
        }else {
            $files = auth()->user()->files;
        }
        if (count($files) < 1) {
            return response()->json([
                'message' => 'Sorry no File found'
            ], 400);
        }else {
            return FileResource::collection($files);
        }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $File = $this->model->with(['user','tag'])->find($id);
          return new FileResource($File);
      }else {
        return response()->json([
            'message' => 'Sorry this File do not exist'
        ], 400);
      }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $File = $this->model->find($id);
            $File->slug = null;
            $update = $File->update([
             'name' => empty($request->name) ? $File->name : $request->name,
             'description' =>   empty($request->description) ? $File->description : $request->description,
            ]);
            if ($update) {
                return response()->json([
                 'message' => 'File updated successfully'
                ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update File'
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
                   'message' => 'File deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete File'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this File do not exist'
          ], 404);
        }
    }

}
