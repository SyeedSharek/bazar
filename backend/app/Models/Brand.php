<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = ['name', 'image', 'status'];

    protected function casts(): array
    {
        return [
            'status' => 'boolean',
        ];
    }
    public function getImageAttribute($value)
    {
        return asset('storage/' . $value);
    }
}
