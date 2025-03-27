<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $guarded = [];
    public function getImageAttribute($value)
    {
        return asset('storage/' . $value);
    }
}
