<?php

namespace App\Http\Resources;

use App\Helpers\General;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
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
            'id'          => $this->id,
            'name'        => $general_helper->clean($this->name),
            'description' => $general_helper->clean($this->description),
            'user'        => new UserResource($this->whenLoaded('user')),
            'slug'        => $general_helper->clean($this->slug),
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at
        ];
    }
}
