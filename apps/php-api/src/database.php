<?php

function getPDO() {
    $host = getenv('DB_HOST');
    $db   = getenv('DB_NAME');
    $user = getenv('DB_USER');
    $pass = getenv('DB_PASS');
    $port = getenv('DB_PORT');

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