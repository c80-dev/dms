<?php

namespace App\Actions;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use App\Mail\VerificationMail;
use App\Models\VerificationToken;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Helpers\FileProcessing;
use Illuminate\Support\Facades\Storage;

class UserAction
{

    public $model;
    public $verification_token;
    public $role;
    public $fileProcessing;
    public $urlValidator;

    public function __construct(User $model,  VerificationToken $verification_token, Role $role, FileProcessing $fileProcessing)
    {
       $this->model = $model;
       $this->verification_token = $verification_token;
       $this->role = $role;
       $this->fileProcessing = $fileProcessing;
    }

    //create user account
    public function createUserAccount($request)
    {
        $user = $this->model->create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => bcrypt($request->password)
        ]);
        $roleAttach =  $this->role->where('name', 'User')->first();
        $user->roles()->attach($roleAttach->id);
        if ($user) {
            $verfication_code = $this->sendVerificationEmail($user->email, $request->name);
            return response()->json([
                'message' => 'Account created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create accounnt'
           ], 400);
        }
    }

    //send verification email
    public function sendVerificationEmail($email, $name)
    {
          $token = Str::random(32);
          $create_token =  $this->verification_token->create([
             'email' => $email,
             'token' => $token
          ]);
          $data = array(
             'title' => 'Reset Password Notification',
             'body' => 'You are receiving this email because we received a password reset request for your account.',
             'token' => $token,
             'name' => $name
          );
          Mail::to($email)->send(new VerificationMail($data));
          return true;
    }

    //get all users
    public function all()
    {
        $users = $this->model->with(['roles' => function($query) {
            $query->select(['name']);
        } ])->latest()->paginate(10);
        if (count($users) < 1) {
            return response()->json([
                'message' => 'Sorry no user found'
            ], 400);
        }else {
            return UserResource::collection($users);
        }
    }
    
    //get single user
    public function get($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->with(['roles' => function($query) {
                $query->select(['name']);
        } ])->find($id);
            return new UserResource($user);
        }else {
            return response()->json([
                'message' => 'Sorry this user do not exist'
            ], 400);
        }
    }

    //get authenticated user
    public function authUser()
    {
        $user = $this->model->with(['roles' => function($query) {
            $query->select(['name']);
        } ])->find(auth()->user()->id);
        return new UserResource($user);
    }

    //update user account
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->find($id);
            $user->slug = null;
            $update = $user->update([
             'name' => empty($request->name) ? $user->name : $request->name,
             'phone' =>   empty($request->phone) ? $user->phone : $request->phone,
             'facebook' =>  empty($request->facebook) ? $user->facebook : $request->facebook,
             'twitter' =>  empty($request->twitter) ? $user->twitter : $request->twitter,
             'linkedin' =>  empty($request->linkedin) ? $user->linkedin : $request->linkedin
            ]);
            if ($update) {
                return response()->json([
                 'message' => 'Profile updated successfully'
                ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update profile'
              ], 400);
           }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }

    //reset user password
    public function password($request, $id)
    {
         $data = $this->model->where('id', '=', $id)->exists();
         if ($data) {

                 $user = $this->model->find($id);
                 $hashedPassword = $user->password;

                 if (Hash::check($request->old_password , $hashedPassword)) {

                     if (!Hash::check($request->password , $hashedPassword)) {

                         try {

                             $user->update([
                                 'password' => empty($request->password) ? $user->password : bcrypt($request->password),
                             ]);
                             return response()->json([
                                 'message' => 'User password reset successful'
                             ], 200);

                         }catch (\Exception $e) {
                             return response()->json([
                                 'message' => 'Sorry the password reset process failed'
                             ], 400);
                         }

                     }else {
                         return response()->json([
                             'message' => 'Sorry new password can not be the old password!'
                         ], 401);
                     }
                 }else {
                     return response()->json([
                         'message' => 'Sorry old password doesnt matched'
                     ], 402);
                 }
         }else {
             return response()->json([
                 'message' => 'Sorry this user do not exist'
             ], 404);
         }
    }

    //image upload
    public function imageUpload($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->find($id);
            $update = $user->update([
                'image_path' => $this->fileProcessing->file_processing($request, 'image_path'),
            ]);
            if ($update) {
                return response()->json([
                 'message' => 'Profile image uploaded successfully'
                ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to upload image'
              ], 400);
           }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }

    //delete user
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete =  $this->model->find($id)->delete();
            if ($delete) {
              return response()->json([
                   'message' => 'User deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete user'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this user do not exist'
          ], 404);
        }
    }
}
