import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class AuthService {
    login(credentials) {
        return axios.post(`${API_URL}/api/auth/login`, credentials);
    }
}