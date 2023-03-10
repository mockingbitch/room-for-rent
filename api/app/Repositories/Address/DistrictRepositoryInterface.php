<?php

namespace App\Repositories\Address;

use App\Repositories\BaseRepositoryInterface;

interface DistrictRepositoryInterface extends BaseRepositoryInterface
{
    public function getDistrict($code);
}
