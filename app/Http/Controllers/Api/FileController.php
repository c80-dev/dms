<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\FileRepositoryInterface;

class FileController extends Controller
{
    private $fileRepository;

    public function __construct(FileRepositoryInterface $fileRepository)
    {
        $this->fileRepository = $fileRepository;
        $this->middleware('auth:api');
    }

    //all
    public function index()
    {
        return $this->fileRepository->allFiles();
    }

    //create
    public function store(Request $request)
    {
        return  $this->fileRepository->createFile($request);
    }

    //show
    public function show($id)
    {
        return $this->fileRepository->showFile($id);
    }

    //update
    public function update(Request $request, $id)
    {
        return $this->fileRepository->updateFile($request, $id);
    }

    //delete
    public function destroy($id)
    {
        return $this->fileRepository->deleteFile($id);
    }
}
