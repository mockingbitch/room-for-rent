import axios from "axios";
import API_URL from './Constant';

const GetCategoryService = () => {
    return axios
        .get(API_URL + "category")
        .then(response => {
            return response.data;
        });
    }

export {
    GetCategoryService
}