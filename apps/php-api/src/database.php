<?php

function getPDO() {
    $host = $_ENV['DB_HOST'];
    $db   = $_ENV['DB_NAME'];
    $user = $_ENV['DB_USER'];
    $pass = $_ENV['DB_PASS'];
    $port = $_ENV['DB_PORT'];

    // Debugging: Check if environment variables are correctly retrieved
    if (!$host || !$db || !$user || !$pass || !$port) {
        throw new \Exception("Environment variables not set correctly: host=$host, db=$db, user=$user, pass=$pass, port=$port");
    }

    $dsn = "pgsql:host=$host;dbname=$db;port=$port";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    try {
        return new PDO($dsn, $user, $pass, $options);
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
}