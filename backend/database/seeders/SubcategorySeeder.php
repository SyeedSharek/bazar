<?php

namespace Database\Seeders;

use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i<=100; $i++ ){
            $data[] = [
                'category_id' => rand(1,100),
                'name' => fake()->unique()->firstName(),
                'slug' => fake()->unique()->slug(),
                'image' => fake()->imageUrl(),
                'created_at' => now(),
            ];
        }

        SubCategory::insert($data);
    }
}
