<?php

namespace App\Repositories\Contracts;

interface GroupRepositoryInterface
{
    public function createGroup($request);

    public function allGroups();

    public function showGroup($id);

    public function updateGroup($request, $id);

    public function deleteGroup($id);

    public function attachUserToGroup($request);

    public function  attachFileToGroup($request);

    public function attachTagToGroup($request);

    public function groupFiles($id);

}
