<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Services\PaginationService;
use PDO;

class DishController
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

        $stmt = $this->pdo->prepare("SELECT * FROM dishes WHERE name ILIKE :query");
        $stmt->execute([':query' => "%$query%"]);
        $dishes = $stmt->fetchAll();

        $paginatedDishes = $this->paginationService->paginateArray($dishes, $page, $perPage);
        
        $response->getBody()->write(json_encode($paginatedDishes));
        return $response->withHeader('Content-Type', 'application/json');
    }
}