<?php
namespace App\Services;

class PaginationService
{
    public function paginate($query, $params, $page, $perPage)
    {
        $offset = ($page - 1) * $perPage;
        $query .= " LIMIT :limit OFFSET :offset";
        $params[':limit'] = $perPage;
        $params[':offset'] = $offset;
        return [$query, $params];
    }
}