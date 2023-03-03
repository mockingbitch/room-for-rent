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

const UpdateCategoryService = (data, token, id) => {
    return axios.put(API_URL + "category" + `?id=${id}`, data, { headers: {"Authorization" : `Bearer ${token}`} })
}

const DeleteCategoryService = (id, token) => {
    return axios.delete(API_URL + "category" + `?id=${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
}


export {
    GetCategoryService,
    CreateCategoryService,
    UpdateCategoryService,
    DeleteCategoryService
}