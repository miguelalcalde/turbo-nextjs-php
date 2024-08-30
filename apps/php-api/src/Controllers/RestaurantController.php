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
        $perPage = (int)($request->getQueryParams()['per_page'] ?? 10);

        $stmt = $this->pdo->prepare("SELECT * FROM restaurants WHERE name ILIKE :query");
        $stmt->execute([':query' => "%$query%"]);
        $restaurants = $stmt->fetchAll();

        $paginatedRestaurants = $this->paginationService->paginateArray($restaurants, $page, $perPage);
        
        $response->getBody()->write(json_encode($paginatedRestaurants));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getDishes(Request $request, Response $response, array $args): Response
    {
        $restaurantId = $args['id'];
        
        $stmt = $this->pdo->prepare("SELECT * FROM dishes WHERE restaurant_id = :restaurantId");
        $stmt->execute([':restaurantId' => $restaurantId]);
        $dishes = $stmt->fetchAll();
        
        $response->getBody()->write(json_encode($dishes));
        return $response->withHeader('Content-Type', 'application/json');
    }
}