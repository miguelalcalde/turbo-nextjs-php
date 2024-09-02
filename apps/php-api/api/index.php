<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\Controllers\DishController;
use App\Controllers\RestaurantController;

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__ . '/../../../');
$dotenv->load();

// Check if environment variables are loaded
if (!getenv('DB_HOST') || !getenv('DB_NAME') || !getenv('DB_USER') || !getenv('DB_PASS') || !getenv('DB_PORT')) {
    throw new \Exception("Environment variables not loaded correctly");
}


$app = AppFactory::create();

// Create PDO instance
$pdo = getPDO();

// Pass PDO to controllers
$dishController = new DishController($pdo);
$restaurantController = new RestaurantController($pdo);

$app->get('/dishes', [$dishController, 'search']);
$app->get('/restaurants', [$restaurantController, 'search']);
$app->get('/restaurants/{id}/dishes', [$restaurantController, 'getDishes']);
$app->get('/restaurants/{id}', [$restaurantController, 'getRestaurant']);


$app->run();