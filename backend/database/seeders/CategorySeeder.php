<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i<=100; $i++ ){
            $data[] = [
                'name' => fake()->unique()->firstName(),
                'slug' => fake()->unique()->slug(),
                'description' => fake()->text(),
                'image' => fake()->imageUrl(),
                'created_at' => now(),
            ];
        }

        Category::insert($data);

    }
}
