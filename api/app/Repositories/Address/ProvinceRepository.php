<?php

namespace App\Repositories\Address;

use App\Models\Address\Province;
use App\Repositories\Address\ProvinceRepositoryInterface;
use App\Repositories\BaseRepository;

class ProvinceRepository extends BaseRepository implements ProvinceRepositoryInterface
{
    public function getModel()
    {
        return Province::class;
    }
}
