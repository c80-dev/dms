<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\SettingRepositoryInterface;

class SettingController extends Controller
{
    private $settingRepository;

    public function __construct(SettingRepositoryInterface $settingRepository)
    {
       $this->settingRepository = $settingRepository;
       $this->middleware('auth:api');
       $this->middleware('auth:admin', ['except' => ['index']]);
    }

    // all seetings
    public function index()
    {
        $settings = $this->settingRepository->allSettings();
        return $settings;
    }

    //create seetings
    public function store(Request $request)
    {
        $setting = $this->settingRepository->createSetting($request);
        return $setting;
    }

    //show seetings details
    public function show($id)
    {
        $setting = $this->settingRepository->showSetting($id);
        return $setting;
    }

    //update settings
    public function update(Request $request, $id)
    {
        $setting = $this->settingRepository->updateSetting($request, $id);
        return $setting;
    }

    //delete settings
    public function destroy($id)
    {
        $setting = $this->settingRepository->deleteSetting($id);
        return $setting;
    }
}
