<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\Controllers\DishController;
use App\Controllers\RestaurantController;

# require __DIR__ . '/../.env.php';
require __DIR__ . '/../vendor/autoload.php';


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

// Add the new index endpoint
$app->get('/', function (Request $request, Response $response) {
    $html = <<<HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Endpoints</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
    </head>
    <body>
        <h1>Available API Endpoints</h1>
        <ul>
            <li><a href="/dishes">/dishes</a> - Search dishes</li>
            <li><a href="/restaurants">/restaurants</a> - Search restaurants</li>
            <li><a href="/restaurants/{id}/dishes">/restaurants/{id}/dishes</a> - Get dishes for a specific restaurant</li>
            <li><a href="/restaurants/{id}">/restaurants/{id}</a> - Get details for a specific restaurant</li>
        </ul>
    </body>
    </html>
    HTML;

    $response->getBody()->write($html);
    return $response->withHeader('Content-Type', 'text/html');
});

$app->get('/dishes', [$dishController, 'search']);
$app->get('/restaurants', [$restaurantController, 'search']);
$app->get('/restaurants/{id}/dishes', [$restaurantController, 'getDishes']);
$app->get('/restaurants/{id}', [$restaurantController, 'getRestaurant']);

$app->run();