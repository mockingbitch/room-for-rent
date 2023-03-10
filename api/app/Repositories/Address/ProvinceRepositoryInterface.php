<?php

namespace App\Repositories\Address;

use App\Repositories\BaseRepositoryInterface;

interface ProvinceRepositoryInterface extends BaseRepositoryInterface
{
    public function getProvince($code);
}
