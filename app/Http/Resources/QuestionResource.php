<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $replies = $this->replies;
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'path' => $this->path,
            'body' => $this->body,
            'replies' => $replies,
            'reply_count' => count($replies),
            'created_at' => $this->created_at->diffForHumans(),
            'user' => $this->user->only('id', 'name'),
        ];
    }
}
