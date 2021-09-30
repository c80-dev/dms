<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\UserRepositoryInterface;

class UserController extends Controller
{
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->middleware('auth:api', ['except' => ['createUser', 'createBusiness']]);
        $this->userRepository = $userRepository;
    }

    //all users
    public function index()
    {
        return $this->userRepository->allUsers();
    }

    //users details
    public function show($id)
    {
        return $this->userRepository->findUser($id);
    }

    //create user account
    public function createUser(Request $request)
    {
        return $this->userRepository->createUserAccount($request);
    }

    //create business account
    public function createBusiness(Request $request)
    {
        return $this->userRepository->createBusinessAccount($request);
    }

    //update users account
    public function updateUserAcount(Request  $request, $id)
    {
        return $this->userRepository->updateUserAcount($request, $id);
    }

    //reset-password
    public function changePassword(Request $request, $id)
    {
       return $this->userRepository->changePassword($request, $id);
    }

    //upload image
    public function updateImage(Request $request, $id)
    {
       return $this->userRepository->updateImage($request, $id);
    }

}
