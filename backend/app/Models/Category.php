<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'status'
    ];

    protected function casts(): array
    {
        return [
            'status' => 'boolean',
        ];
    }

    /**
     * Automatically generate the slug from the name attribute.
     *
     * @param string $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value); // Generate slug from the name
    }

    public function getImageAttribute($value)
    {
        return asset('storage/' . $value);
    }

    public function subCategories()
    {
        return $this->hasMany(SubCategory::class);
    }
}
