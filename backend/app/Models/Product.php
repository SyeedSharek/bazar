<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\ProductImage;



class Product extends Model
{
    protected $guarded = [];
    protected $appends = ['image_urls'];
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value); // Generate slug from the name
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }
    public function getImageUrlsAttribute()
    {
        return $this->productImages->map(function ($image) {
            return asset('storage/' . $image->image_path);
        })->toArray();
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function subCategory(){
        return $this->belongsTo(SubCategory::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }
}
