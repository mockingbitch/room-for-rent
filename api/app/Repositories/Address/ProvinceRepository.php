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

    public function getProvince($code)
    {
        $provinces = $code || null !== $code ? $this->model->where('code', $code)->get() : $this->getAll();

        foreach ($provinces as $province) :
            $province->value = $province->code;
            $province->label = $province->name;
        endforeach;

        return $provinces;
    }
}
