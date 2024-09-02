<?php
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo "DB_HOST: " . getenv('DB_HOST') . PHP_EOL;
echo "DB_NAME: " . getenv('DB_NAME') . PHP_EOL;
echo "DB_USER: " . getenv('DB_USER') . PHP_EOL;
echo "DB_PASS: " . getenv('DB_PASS') . PHP_EOL;
echo "DB_PORT: " . getenv('DB_PORT') . PHP_EOL;