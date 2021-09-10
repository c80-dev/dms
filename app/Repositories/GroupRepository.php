<?php

namespace App\Repositories;

use App\Actions\GroupAction;
use App\Repositories\Contracts\GroupRepositoryInterface;
use Illuminate\Support\Facades\Validator;

class GroupRepository implements GroupRepositoryInterface
{
      private $action;

    public function __construct(GroupAction $action)
    {
        $this->action = $action;
    }

      //create
    public function createGroup($request)
    {
        $validator =  Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required'
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
    public function allGroups()
    {
        return $this->action->all();
    }

    //find
    public function showGroup($id)
    {
        return $this->action->get($id);
    }

    //update
    public function updateGroup($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required',
            'description' => 'sometimes'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }else {
            return $this->action->update($request, $id);
        }
    }

    //attach users to group
    public function attachUserToGroup($request)
    {
        $validator =  Validator::make($request->all(),[
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }else {
            return $this->action->attachUserToGroup($request);
        }
    }

     //attach users to group
     public function attachFileToGroup($request)
     {
         $validator =  Validator::make($request->all(),[
             'file_id' => 'required'
         ]);

         if ($validator->fails()) {
             return response()->json([
                 'message' => $validator->errors()->first()
             ], 422);
         }else {
             return $this->action->attachFileToGroup($request);
         }
     }

     public function attachTagToGroup($request)
     {
        $validator =  Validator::make($request->all(),[
            'tag_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }else {
            return $this->action->attachTagToGroup($request);
        }
     }

    //delete
    public function deleteGroup($id)
    {
        return $this->action->delete($id);
    }

}
