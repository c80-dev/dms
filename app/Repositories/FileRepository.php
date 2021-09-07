<?php

namespace App\Repositories;

use App\Actions\FileAction;
use App\Repositories\Contracts\FileRepositoryInterface;
use Illuminate\Support\Facades\Validator;

class FileRepository implements FileRepositoryInterface
{
      private $action;

    public function __construct(FileAction $action)
    {
        $this->action = $action;
    }

    //create
    public function createFile($request)
    {
        $validator =  Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'tag_id' => 'required',
            'file_path' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }else {
            return  $this->action->create($request);
        }
    }

    //all
    public function allFiles()
    {
        return $this->action->all();
    }

    //find
    public function showFile($id)
    {
        return $this->action->get($id);
    }

    //update
    public function updateFile($request, $id)
    {
          $validator =  Validator::make($request->all(),[
                'name' => 'required',
                'description' => 'required',
                'tag_id' => 'required',
                'file_path' => 'required'
          ]);

          if ($validator->fails()) {
              return response()->json([
                  'message' => $$validator->errors()->first()
              ], 422);
          }else {
                return $this->action->update($request, $id);
          }
    }

    //delete
    public function deleteFile($id)
    {
        return $this->action->delete($id);
    }

}
