<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class SubCategory extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'image',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value); // Generate slug from the name
    }
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
