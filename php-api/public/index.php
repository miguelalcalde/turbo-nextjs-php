<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\Controllers\DishController;
use App\Controllers\RestaurantController;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

// Database connection test
$app->get('/db-test', function (Request $request, Response $response) {
    try {
        $pdo = new PDO('pgsql:host=localhost;port=5432;dbname=myapp', 'myuser', 'mypassword');
        $response->getBody()->write("Connected to the database successfully!");
    } catch (PDOException $e) {
        $response->getBody()->write("Connection failed: " . $e->getMessage());
    }
    return $response;
});

// Existing routes...
$app->get('/dishes', [DishController::class, 'search']);
$app->get('/restaurants', [RestaurantController::class, 'search']);
$app->get('/restaurants/{id}/dishes', [RestaurantController::class, 'getDishes']);

$app->run();