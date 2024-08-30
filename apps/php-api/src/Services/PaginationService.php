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

    public function paginateArray(array $items, int $page, int $perPage): array
    {
        $totalItems = count($items);
        $offset = ($page - 1) * $perPage;
        $paginatedItems = array_slice($items, $offset, $perPage);

        return [
            'data' => $paginatedItems,
            'meta' => [
                'current_page' => $page,
                'per_page' => $perPage,
                'total_items' => $totalItems,
                'total_pages' => ceil($totalItems / $perPage)
            ]
        ];
    }
}