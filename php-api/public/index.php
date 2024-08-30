<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\Controllers\DishController;
use App\Controllers\RestaurantController;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

// Dish routes
$app->get('/dishes', [DishController::class, 'search']);

// Restaurant routes
$app->get('/restaurants', [RestaurantController::class, 'search']);
$app->get('/restaurants/{id}/dishes', [RestaurantController::class, 'getDishes']);

$app->run();