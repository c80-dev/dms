<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class FileResource extends JsonResource
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
            'user_id'   => $this->user_id,
            'tag_id'   => $this->tag_id,
            'name'      => $general_helper->clean($this->name),
            'description'     => $general_helper->clean($this->description),
            'user'        => new UserResource($this->whenLoaded('user')),
            'tag'        => new TagResource($this->whenLoaded('tag')),
            'file_path'   => $this->file_path,
            'slug'      => $general_helper->clean($this->slug),
            'roles'     => $general_helper->clean($this->whenLoaded('roles')),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
