import axios from "axios";
import API_URL from './Constant';

const LoginService = ({email, password}) => {
    return axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            // if (response.data.access_token) {
            // localStorage.setItem("token", JSON.stringify(response.data.access_token));
            // localStorage.setItem("user", JSON.stringify(response.data.user.name));
            // }

            return response.data;
        });
}

const LogoutService = (token) => {
    return axios.get(API_URL + "logout", { headers: {"Authorization" : `Bearer ${token}`} }).then(response => response.data)
}

export {
    LoginService,
    LogoutService,
}