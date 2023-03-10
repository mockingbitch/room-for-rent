<?php

namespace App\Repositories\Address;

use App\Repositories\BaseRepositoryInterface;

interface WardRepositoryInterface extends BaseRepositoryInterface
{
    public function getWard($code);
}
