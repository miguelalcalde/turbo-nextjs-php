<?php

namespace App\Data;

class MockDatabase
{
    public static $restaurants = [
        ['id' => 1, 'name' => 'Pizza Palace', 'cuisine' => 'Italian'],
        ['id' => 2, 'name' => 'Sushi Spot', 'cuisine' => 'Japanese'],
        ['id' => 3, 'name' => 'Burger Barn', 'cuisine' => 'American'],
    ];

    public static $dishes = [
        ['id' => 1, 'name' => 'Margherita Pizza', 'restaurant_id' => 1],
        ['id' => 2, 'name' => 'California Roll', 'restaurant_id' => 2],
        ['id' => 3, 'name' => 'Cheeseburger', 'restaurant_id' => 3],
        ['id' => 4, 'name' => 'Pepperoni Pizza', 'restaurant_id' => 1],
        ['id' => 5, 'name' => 'Sashimi Platter', 'restaurant_id' => 2],
        ['id' => 6, 'name' => 'Veggie Burger', 'restaurant_id' => 3],
    ];
}