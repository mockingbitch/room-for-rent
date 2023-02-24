import axios from "axios";
import API_URL from './Constant';

const GetTagService = (id) => {
    if (!id || id === undefined) {

        return axios
        .get(API_URL + "tag")
        .then(response => {
            return response.data;
        });
    }

    return axios.get(API_URL + "tag" + `?id=${id}`).then(response => response.data);
}

const CreateTagService = (data, token) => {
    return axios.post(API_URL + "tag", data, { headers: {"Authorization" : `Bearer ${token}`} })
}

const UpdateTagService = (data, token, id) => {
    return axios.put(API_URL + "tag" + `?id=${id}`, data, { headers: {"Authorization" : `Bearer ${token}`} })
}

const DeleteTagService = (id, token) => {
    return axios.delete(API_URL + "tag" + `?id=${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
}


export {
    GetTagService,
    CreateTagService,
    UpdateTagService,
    DeleteTagService
}