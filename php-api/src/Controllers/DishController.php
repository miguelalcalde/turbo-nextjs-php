<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Data\MockDatabase;

class DishController
{
    public function search(Request $request, Response $response, array $args): Response
    {
        $query = $request->getQueryParams()['q'] ?? '';
        $dishes = array_filter(MockDatabase::$dishes, function($dish) use ($query) {
            return stripos($dish['name'], $query) !== false;
        });
        
        $response->getBody()->write(json_encode(array_values($dishes)));
        return $response->withHeader('Content-Type', 'application/json');
    }
}