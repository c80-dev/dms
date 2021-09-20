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

    // all categories
    public function index()
    {
        $tags = $this->tagRepository->allTags();
        return $tags;
    }

    //create
    public function store(Request $request)
    {
        return  $this->tagRepository->createTag($request);
    }

    //show
    public function show($id)
    {
        $tag = $this->tagRepository->showTag($id);
        return $tag;
    }

    //update
    public function update(Request $request, $id)
    {
        $tag = $this->tagRepository->updateTag($request, $id);
        return $tag;
    }

     //add users to Tag
     public function addUserToTag(Request $request)
     {
        return $this->tagRepository->attachUserToTag($request);
     }
 
     //add file to Tag
     public function addFileToTag(Request $request)
     {
        return $this->tagRepository->attachFileToTag($request);
     }
 
     //add file to Tag
     public function addGroupToTag(Request $request)
     {
        return $this->tagRepository->attachGroupToTag($request);
     }

    //delete
    public function destroy($id)
    {
        $tag = $this->tagRepository->deleteTag($id);
        return $tag;
    }
}
