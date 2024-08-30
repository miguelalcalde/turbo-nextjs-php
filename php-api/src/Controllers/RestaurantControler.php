<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Data\MockDatabase;

class RestaurantController
{
    public function search(Request $request, Response $response, array $args): Response
    {
        $query = $request->getQueryParams()['q'] ?? '';
        $restaurants = array_filter(MockDatabase::$restaurants, function($restaurant) use ($query) {
            return stripos($restaurant['name'], $query) !== false || stripos($restaurant['cuisine'], $query) !== false;
        });
        
        $response->getBody()->write(json_encode(array_values($restaurants)));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getDishes(Request $request, Response $response, array $args): Response
    {
        $restaurantId = (int)$args['id'];
        $dishes = array_filter(MockDatabase::$dishes, function($dish) use ($restaurantId) {
            return $dish['restaurant_id'] === $restaurantId;
        });
        
        $response->getBody()->write(json_encode(array_values($dishes)));
        return $response->withHeader('Content-Type', 'application/json');
    }
}