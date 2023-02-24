import axios from "axios";
import API_URL from './Constant';

const GetHouseService = (id) => {
    if (!id || id === undefined) {

        return axios
        .get(API_URL + "house")
        .then(response => {
            return response.data;
        });
    }

    return axios.get(API_URL + "house" + `?id=${id}`).then(response => response.data);
}

const CreateHouseService = (data, token) => {
    return axios.post(API_URL + "house", data, { headers: {"Authorization" : `Bearer ${token}`} })
}

const UpdateHouseService = (data, token, id) => {
    return axios.put(API_URL + "house" + `?id=${id}`, data, { headers: {"Authorization" : `Bearer ${token}`} })
}

const DeleteHouseService = (id, token) => {
    return axios.delete(API_URL + "house" + `?id=${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
}


export {
    GetHouseService,
    CreateHouseService,
    UpdateHouseService,
    DeleteHouseService
}