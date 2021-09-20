<?php

namespace App\Repositories\Contracts;

interface TagRepositoryInterface
{
    public function createTag($request);

    public function allTags();

    public function showTag($id);

    public function updateTag($request, $id);

    public function deleteTag($id);

    public function attachUserToTag($request);

    public function  attachFileToTag($request);

    public function attachGroupToTag($request);

}
