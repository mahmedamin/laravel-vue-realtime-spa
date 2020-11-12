<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Question extends Model
{
    protected $guarded = ['_token'];
    protected $with = ['replies'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function getPathAttribute()
    {
        return "questions/$this->slug";
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($question) {
            $question->slug = Str::slug($question->title);
        });
    }

}
