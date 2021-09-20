<?php

namespace App\Repositories;

use App\Actions\TagAction;
use App\Repositories\Contracts\TagRepositoryInterface;
use Illuminate\Support\Facades\Validator;

class TagRepository implements TagRepositoryInterface
{
      private $action;

    public function __construct(TagAction $action)
    {
        $this->action = $action;
    }

      //create
    public function createTag($request)
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
    public function allTags()
    {
        return $this->action->all();
    }

    //find
    public function showTag($id)
    {
        return $this->action->get($id);
    }

    //update
    public function updateTag($request, $id)
    {
          $validator =  Validator::make($request->all(),[
              'name' => 'required',
              'description' => 'sometimes'
          ]);

          if ($validator->fails()) {
              return response()->json([
                  'message' => $$validator->errors()->first()
              ], 422);
          }else {
                return $this->action->update($request, $id);
          }
    }

        //attach users to Tag
        public function attachUserToTag($request)
        {
            $validator =  Validator::make($request->all(),[
                'user_id' => 'required'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ], 422);
            }else {
                return $this->action->attachUserToTag($request);
            }
        }
    
         //attach users to Tag
         public function attachFileToTag($request)
         {
             $validator =  Validator::make($request->all(),[
                 'file_id' => 'required'
             ]);
    
             if ($validator->fails()) {
                 return response()->json([
                     'message' => $validator->errors()->first()
                 ], 422);
             }else {
                 return $this->action->attachFileToTag($request);
             }
         }
    
         public function attachGroupToTag($request)
         {
            $validator =  Validator::make($request->all(),[
                'tag_id' => 'required'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ], 422);
            }else {
                return $this->action->attachTagToTag($request);
            }
         }

    //delete
    public function deleteTag($id)
    {
        return $this->action->delete($id);
    }

}
