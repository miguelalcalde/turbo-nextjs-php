<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\Controllers\DishController;
use App\Controllers\RestaurantController;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

// Create PDO instance
$pdo = getPDO();

// Pass PDO to controllers
$dishController = new DishController($pdo);
$restaurantController = new RestaurantController($pdo);

$app->get('/dishes', [$dishController, 'search']);
$app->get('/restaurants', [$restaurantController, 'search']);
$app->get('/restaurants/{id}/dishes', [$restaurantController, 'getDishes']);

$app->run();