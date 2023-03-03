<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Repositories\Address\ProvinceRepositoryInterface as ProvinceRepository;
use App\Repositories\Address\DistrictRepositoryInterface as DistrictRepository;
use App\Repositories\Address\WardRepositoryInterface as WardRepository;
use App\Constants\Constant;

class AddressController extends Controller
{
    /**
     * @var provinceRepository
     */
    protected $provinceRepository;

    /**
     * @var districtRepository
     */
    protected $districtRepository;

    /**
     * @var wardRepository
     */
    protected $wardRepository;

    /**
     * @param ProvinceRepository $provinceRepository
     * @param DistrictRepository $districtRepository
     * @param WardRepository $wardRepository
     */
    public function __construct(
        ProvinceRepository $provinceRepository,
        DistrictRepository $districtRepository,
        WardRepository $wardRepository)
    {
        $this->provinceRepository = $provinceRepository;
        $this->districtRepository = $districtRepository;
        $this->wardRepository = $wardRepository;
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function getDistrict(Request $request) : JsonResponse
    {
        try {
            if ($request->province_code || null !== $request->province_code) :
                if (! $districts = $this->districtRepository->getDistrict($request->province_code)) :
                    return $this->exceptionResponse(AddressConstant::MSG_NOT_FOUND);
                endif;

                return response()->json([
                    'districts'     => $districts,
                    'message'       => Constant::MSG_OK,
                    'error'         => Constant::ERR_CODE_OK,
                ], Response::HTTP_OK);
            endif;

            return response()->json([
                'districts'     => $this->districtRepository->getAll(),
                'message'       => Constant::MSG_OK,
                'error'         => Constant::ERR_CODE_OK
            ], Response::HTTP_OK);
        } catch (\Exception ) {
            return $this->catchErrorResponse();
        }
    }

    public function getWard(Request $request) : JsonResponse
    {
        try {
            if ($request->district_code || null !== $request->district_code) :
                if (! $wards = $this->wardRepository->getWard($request->district_code)) :
                    return $this->exceptionResponse(AddressConstant::MSG_NOT_FOUND);
                endif;

                return response()->json([
                    'districts'     => $districts,
                    'message'       => Constant::MSG_OK,
                    'error'         => Constant::ERR_CODE_OK,
                ], Response::HTTP_OK);
            endif;

            return response()->json([
                'districts'     => $this->districtRepository->getAll(),
                'message'       => Constant::MSG_OK,
                'error'         => Constant::ERR_CODE_OK
            ], Response::HTTP_OK);
        } catch (\Exception ) {
            return $this->catchErrorResponse();
        }
    }
}
