<?php

namespace App\Repositories\Room;

use App\Models\Room;
use App\Repositories\Room\RoomRepositoryInterface;
use App\Repositories\BaseRepository;

class RoomRepository extends BaseRepository implements RoomRepositoryInterface
{
    public function getModel()
    {
        return Room::class;
    }
}
