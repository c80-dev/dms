<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\AuthRepositoryInterface;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class AuthController extends Controller
{
    private $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->middleware('auth:api', ['except' => ['login']]);
        $this->authRepository = $authRepository;
    }

    //login users
    public function login(Request $request)
    {
        return $this->authRepository->login($request);
    }

    //logout users
    public function logout(Request $request)
    {
        return $this->authRepository->logout($request);
    }

    //refresh password token
    public function refresh()
    {
        return $this->authRepository->refresh();
    }

    //users profile
    public function userProfile()
    {
        return $this->authRepository->userProfile();
    }

    //delete account
    public function delete($id)
    {
        return $this->authRepository->delete($id);
    }

}
