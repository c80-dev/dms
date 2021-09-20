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

    // all categories
    public function index()
    {
        $files = $this->fileRepository->allFiles();
        return $files;
    }

    //create
    public function store(Request $request)
    {
        return  $this->fileRepository->createFile($request);
    }

    //show
    public function show($id)
    {
        $file = $this->fileRepository->showFile($id);
        return $file;
    }

    //update
    public function update(Request $request, $id)
    {
        $file = $this->fileRepository->updateFile($request, $id);
        return $file;
    }

    //delete
    public function destroy($id)
    {
        $file = $this->fileRepository->deleteFile($id);
        return $file;
    }
}
