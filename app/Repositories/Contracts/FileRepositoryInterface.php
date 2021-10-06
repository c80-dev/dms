<?php

namespace App\Repositories\Contracts;

interface FileRepositoryInterface
{
    public function createFile($request);

    public function allFiles();

    public function showFile($id);

    public function updateFile($request, $id);

    public function authUserFiles();

    public function addUserToFIle($request);

    public function deleteFile($id);

}
