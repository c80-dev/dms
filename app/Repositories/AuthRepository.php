<?php

namespace App\Repositories;

use Auth;
use JWTAuth;
use App\Actions\UserAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\AuthRepositoryInterface;
use App\Helpers\Token;

class AuthRepository implements AuthRepositoryInterface
{
      private $action;
      public $token_helper;

      public function __construct(UserAction $action, Token $token_helper)
      {
         $this->action = $action;
         $this->token_helper = $token_helper;
      }

      //login user
      public function login($request)
      {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ], 422);
            }else {
              if (! $token = auth()->attempt($validator->validated())) {
                  return response()->json([
                    'message' => 'Invalid login details'
                  ], 401);
              }
              if (auth()->user()->email_verified_at == NULL) {
                return response()->json([
                  'message' => 'Email must be verified'
                ], 401);

              }else {
                $token =  $this->token_helper->createNewToken($token);
                if ($token) {
                    return response()->json([
                        'token' => $token
                    ], 200);
                }
              }
            }
      }

      //logout user
      public function logout($request)
      {
           $validator = Validator::make($request->all(), [
               'token' => 'required',
           ]);
           if ($validator->fails()) {
               return response()->json([
                   'message' => $validator->errors()->first()
               ], 422);
           }else {
               try {
                    JWTAuth::invalidate($request->token);
                    return response()->json([
                       'message' => 'User logged out successfully.'
                    ], 200);
                } catch (JWTException $e) {
                    return response()->json([
                       'message' => 'Failed to logout, please try again.'
                   ], 500);
                }
           }
      }

      //refresh users token
      public function refresh()
      {
          return $this->token_helper->createNewToken(auth()->refresh());
      }

      //users profile
      public function userProfile()
      {
          return $this->action->authUser();
      }

      public function delete($id) {
            return $this->action->delete($id);
      }

}
