<?php

function getPDO() {
    $host = 'localhost';
    $db   = 'postgres';
    $user = 'myuser';
    $pass = 'mypassword';
    $port = '5432';

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