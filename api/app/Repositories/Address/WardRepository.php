<?php

namespace App\Repositories\Address;

use App\Models\Address\Ward;
use App\Repositories\Address\WardRepositoryInterface;
use App\Repositories\BaseRepository;

class WardRepository extends BaseRepository implements WardRepositoryInterface
{
    public function getModel()
    {
        return Ward::class;
    }
}
