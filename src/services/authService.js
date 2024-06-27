import axios from "axios";

export default class AuthService {
    login(credentials) {
        return axios.post("http://localhost:8080/api/auth/login", credentials);
    }
}