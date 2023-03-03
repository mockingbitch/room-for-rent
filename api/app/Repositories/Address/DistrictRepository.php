<?php

namespace App\Repositories\Address;

use App\Models\Address\District;
use App\Repositories\Address\DistrictRepositoryInterface;
use App\Repositories\BaseRepository;

class DistrictRepository extends BaseRepository implements DistrictRepositoryInterface
{
    public function getModel()
    {
        return District::class;
    }

    public function getDistrict($code)
    {
        return $this->model->where('province_code', $code)->get();
    }
}
