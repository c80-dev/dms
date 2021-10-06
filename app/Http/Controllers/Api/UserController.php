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

    public function index()
    {
        return $this->userRepository->allUsers();
    }

    public function show($id)
    {
        return $this->userRepository->findUser($id);
    }

    public function createUser(Request $request)
    {
        return $this->userRepository->createUserAccount($request);
    }

    public function createBusiness(Request $request)
    {
        return $this->userRepository->createBusinessAccount($request);
    }

    public function updateUserAcount(Request  $request, $id)
    {
        return $this->userRepository->updateUserAcount($request, $id);
    }

    public function changePassword(Request $request, $id)
    {
       return $this->userRepository->changePassword($request, $id);
    }

    public function updateImage(Request $request, $id)
    {
       return $this->userRepository->updateImage($request, $id);
    }

}
