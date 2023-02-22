import axios from "axios";
import API_URL from './Constant';

const GetCategoryService = (id) => {
    if (!id || id === undefined) {

        return axios
        .get(API_URL + "category")
        .then(response => {
            return response.data;
        });
    }

    return axios.get(API_URL + "category" + `?id=${id}`).then(response => response.data);
}

const CreateCategoryService = (data, token) => {
    return axios.post(API_URL + "category", data, { headers: {"Authorization" : `Bearer ${token}`} })
}

export {
    GetCategoryService,
    CreateCategoryService
}