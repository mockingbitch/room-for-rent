import axios from "axios";
import API_URL from './Constant';

const GetDistrictService = (id) => {
    if (!id || id === undefined) {

        return axios
        .get(API_URL + "district")
        .then(response => {
            return response.data;
        });
    }

    return axios.get(API_URL + "district" + `?province_code=${id}`);
}

const GetProvinceService = (id) => {
    if (!id || id === undefined) {

        return axios
        .get(API_URL + "province")
        .then(response => {
            return response.data;
        });
    }

    return axios.get(API_URL + "province" + `?code=${id}`);
}

const GetWardService = (id) => {
    if (!id || id === undefined) {

        return axios
        .get(API_URL + "ward")
        .then(response => {
            return response.data;
        });
    }

    return axios.get(API_URL + "ward" + `?district_code=${id}`);
}

export {
    GetDistrictService,
    GetProvinceService,
    GetWardService
}