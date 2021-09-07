<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $general_helper = new General();
        return [
            'id'        => $this->id,
            'name'      => $general_helper->clean($this->name),
            'email'     => $general_helper->clean($this->email),
            'phone'     => $general_helper->clean($this->phone),
            'facebook'  => $general_helper->clean($this->facebook),
            'twitter'   => $general_helper->clean($this->twitter),
            'linkedin'  => $general_helper->clean($this->linkedin),
            'image_path'=> $general_helper->clean($this->image_path),
            'slug'      => $general_helper->clean($this->slug),
            'roles'     => $general_helper->clean($this->whenLoaded('roles')),
            'created_at'=> $this->created_at->diffForHumans(),
            'updated_at'=> $this->updated_at
        ];
    }
}
