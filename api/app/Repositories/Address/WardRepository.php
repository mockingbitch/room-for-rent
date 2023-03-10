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

    public function getWard($code)
    {
        $wards = $code || null !== $code ? $this->model->where('district_code', $code)->get() : $this->getAll();

        foreach ($wards as $ward) :
            $ward->value = $ward->code;
            $ward->label = $ward->name;
        endforeach;

        return $wards;
    }
}
