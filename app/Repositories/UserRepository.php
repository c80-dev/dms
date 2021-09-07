<?php

namespace App\Repositories;

use App\Actions\UserAction;
use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Support\Facades\Validator;

class UserRepository implements UserRepositoryInterface
{
      private $action;

      public function __construct(UserAction $action)
      {
         $this->action = $action;
      }

      //create user
      public function createUserAccount($request)
      {
          $validator =  Validator::make($request->all(), [
              'name' => 'required',
              'email' => 'required|email|unique:users',
              'phone' => 'required|unique:users',
              'password' => 'required|confirmed'
          ]);

          if ($validator->fails()) {
              return response()->json([
                  'message' => $validator->errors()->first()
              ], 422);
          }else {
               return  $this->action->createUserAccount($request);
          }
      }

      //all user
      public function allUsers()
      {
        return $this->action->all();
      }

      //find user
      public function findUser($id)
      {
        return $this->action->get($id);
      }

      //update account
      public function updateUserAcount($request, $id)
      {
          $validator =  Validator::make($request->all(),[
              'name' => 'required',
              'phone' => 'sometimes',
              'facebook' => 'sometimes',
              'twitter' => 'sometimes',
              'linkedin' => 'sometimes'
          ]);

          if ($validator->fails()) {
              return response()->json([
                  'message' => $$validator->errors()->first()
              ], 422);
          }else {
                return $this->action->update($request, $id);
          }
      }

      //update user password
      public function changePassword($request, $id)
      {
          $validator =  Validator::make($request->all(),[
              'old_password' => 'required',
              'password' => 'required|confirmed'
          ]);
          if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
          }else {
              return $this->action->password($request, $id);
          }
      }

      //upload image
      public function updateImage($request, $id)
      {
            $validator =  Validator::make($request->all(),[
               'image_path' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ], 422);
            }else {
                return $this->action->image($request, $id);
            }
      }

}
