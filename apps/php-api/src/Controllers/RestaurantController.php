<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Services\PaginationService;
use PDO;

class RestaurantController
{
    private $pdo;
    private $paginationService;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
        $this->paginationService = new PaginationService();
    }

    public function search(Request $request, Response $response, array $args): Response
    {
        $query = $request->getQueryParams()['q'] ?? '';
        $page = (int)($request->getQueryParams()['page'] ?? 1);
        $perPage = (int)($request->getQueryParams()['per_page'] ?? 9);

        $stmt = $this->pdo->prepare("SELECT * FROM restaurants WHERE name ILIKE :query");
        $stmt->execute([':query' => "%$query%"]);
        $restaurants = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Convert categories from string to array
        $restaurants = array_map(function($restaurant) {
            $restaurant['categories'] = $this->parseCategories($restaurant['categories']);
            return $restaurant;
        }, $restaurants);

        $paginatedRestaurants = $this->paginationService->paginateArray($restaurants, $page, $perPage);
        
        $response->getBody()->write(json_encode($paginatedRestaurants));
        return $response->withHeader('Content-Type', 'application/json');
    }

    private function parseCategories($categories)
    {
        // Remove the curly braces and split the string
        $categoriesString = trim($categories, '{}');
        $categoriesArray = str_getcsv($categoriesString);
        
        // Remove any quotes from each category
        return array_map(function($category) {
            return trim($category, '"');
        }, $categoriesArray);
    }

    public function getDishes(Request $request, Response $response, array $args): Response
    {
        $restaurantId = $args['id'];
        $page = (int)($request->getQueryParams()['page'] ?? 1);
        $perPage = (int)($request->getQueryParams()['per_page'] ?? 9);
        
        $stmt = $this->pdo->prepare("SELECT * FROM dishes WHERE restaurant_id = :restaurantId");
        $stmt->execute([':restaurantId' => $restaurantId]);
        $dishes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $paginatedDishes = $this->paginationService->paginateArray($dishes, $page, $perPage);
        
        $response->getBody()->write(json_encode($paginatedDishes));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getRestaurant(Request $request, Response $response, array $args): Response
    {
        $id = $args['id'];
        
        $stmt = $this->pdo->prepare("SELECT * FROM restaurants WHERE id = :id");
        $stmt->execute([':id' => $id]);
        $restaurant = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$restaurant) {
            $response->getBody()->write(json_encode(['error' => 'Restaurant not found']));
            return $response->withStatus(404)->withHeader('Content-Type', 'application/json');
        }
        
        // Convert categories from string to array
        $restaurant['categories'] = $this->parseCategories($restaurant['categories']);
        
        $response->getBody()->write(json_encode($restaurant));
        return $response->withHeader('Content-Type', 'application/json');
    }
}