<?php

namespace App\Repositories\Contracts;

interface UserRepositoryInterface
{
    public function allUsers();

    public function createUserAccount($request);

    public function findUser($id);

    public function updateUserAcount($request, $id);

    public function changePassword($request, $id);

    public function updateImage($request, $id);

}
