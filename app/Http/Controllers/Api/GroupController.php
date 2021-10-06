<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\GroupRepositoryInterface;

class GroupController extends Controller
{
    private $groupRepository;

    public function __construct(GroupRepositoryInterface $groupRepository)
    {
        $this->groupRepository = $groupRepository;
        $this->middleware('auth:api');
    }

    public function index()
    {
        $groups = $this->groupRepository->allGroups();
        return $groups;
    }

    public function store(Request $request)
    {
        return  $this->groupRepository->createGroup($request);
    }

    public function show($id)
    {
        return $this->groupRepository->showGroup($id);
    }

    public function update(Request $request, $id)
    {
        return $this->groupRepository->updateGroup($request, $id);
    }

    public function addUserToGroup(Request $request)
    {
        return $this->groupRepository->attachUserToGroup($request);
    }

    public function addFileToGroup(Request $request)
    {
        return $this->groupRepository->attachFileToGroup($request);
    }

    public function addTagToGroup(Request $request)
    {
        return $this->groupRepository->attachTagToGroup($request);
    }

    public function showFiles($id)
    {
        return $this->groupRepository->groupFiles($id);
    }

    public function destroy($id)
    {
        return $this->groupRepository->deleteGroup($id);
    }
}
