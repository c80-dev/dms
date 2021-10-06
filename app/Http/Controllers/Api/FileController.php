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

    public function index()
    {
        return $this->fileRepository->allFiles();
    }

    public function store(Request $request)
    {
        return  $this->fileRepository->createFile($request);
    }

    public function show($id)
    {
        return $this->fileRepository->showFile($id);
    }

    public function update(Request $request, $id)
    {
        return $this->fileRepository->updateFile($request, $id);
    }

    public function authenticatedUserFiles()
    {
        return $this->fileRepository->authUserFiles();
    }

    public function addUserToFile(Request $request)
    {
        return $this->fileRepository->addUserToFIle($request);
    }

    public function destroy($id)
    {
        return $this->fileRepository->deleteFile($id);
    }
}
