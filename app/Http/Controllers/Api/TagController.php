<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\TagRepositoryInterface;

class TagController extends Controller
{
    private $tagRepository;

    public function __construct(TagRepositoryInterface $tagRepository)
    {
        $this->tagRepository = $tagRepository;
        $this->middleware('auth:api');
    }

    public function index()
    {
        return $this->tagRepository->allTags();
    }

    public function store(Request $request)
    {
        return  $this->tagRepository->createTag($request);
    }

    public function show($id)
    {
        return $this->tagRepository->showTag($id);
    }

    public function update(Request $request, $id)
    {
        return $this->tagRepository->updateTag($request, $id);
    }

    public function addUserToTag(Request $request)
    {
        return $this->tagRepository->attachUserToTag($request);
    }
 
    public function addFileToTag(Request $request)
    {
        return $this->tagRepository->attachFileToTag($request);
    }
 
    public function addGroupToTag(Request $request)
    {
        return $this->tagRepository->attachGroupToTag($request);
    }

    public function destroy($id)
    {
        return $this->tagRepository->deleteTag($id);
    }
}
