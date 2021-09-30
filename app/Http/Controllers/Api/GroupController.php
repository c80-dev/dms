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

    //all
    public function index()
    {
        $groups = $this->groupRepository->allGroups();
        return $groups;
    }

    //create
    public function store(Request $request)
    {
        return  $this->groupRepository->createGroup($request);
    }

    //show
    public function show($id)
    {
        return $this->groupRepository->showGroup($id);
    }

    //update
    public function update(Request $request, $id)
    {
        return $this->groupRepository->updateGroup($request, $id);
    }

    //add users to group
    public function addUserToGroup(Request $request)
    {
        return $this->groupRepository->attachUserToGroup($request);
    }

    //add file to group
    public function addFileToGroup(Request $request)
    {
        return $this->groupRepository->attachFileToGroup($request);
    }

    //add file to group
    public function addTagToGroup(Request $request)
    {
        return $this->groupRepository->attachTagToGroup($request);
    }

    //show files
    public function showFiles($id)
    {
        return $this->groupRepository->groupFiles($id);
    }

    //delete
    public function destroy($id)
    {
        return $this->groupRepository->deleteGroup($id);
    }
}
