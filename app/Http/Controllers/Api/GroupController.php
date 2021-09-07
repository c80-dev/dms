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

    // all categories
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
        $group = $this->groupRepository->showGroup($id);
        return $group;
    }

    //update
    public function update(Request $request, $id)
    {
        $group = $this->groupRepository->updateGroup($request, $id);
        return $group;
    }

    //delete
    public function destroy($id)
    {
        $group = $this->groupRepository->deleteGroup($id);
        return $group;
    }
}
