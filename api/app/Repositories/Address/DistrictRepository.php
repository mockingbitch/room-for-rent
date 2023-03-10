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
        $districts = $code || null !== $code ? $this->model->where('province_code', $code)->get() : $this->getAll();

        foreach ($districts as $district) :
            $district->value = $district->code;
            $district->label = $district->name;
        endforeach;

        return $districts;
    }
}
