<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'slug' => $this->faker->slug,
            'thumbnail' => $this->faker->imageUrl,
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph,
        ];
    }
}
