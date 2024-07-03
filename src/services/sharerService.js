import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class SharerService {
    getSharers() {
        return axios.get(`${API_URL}/sharers/all`);
    }

    getSharerById(sharerId) {
        return axios.get(`${API_URL}/sharers/${sharerId}`);
    }

    createSharer(sharer) {
        return axios.post(`${API_URL}/sharers/create`, sharer);
    }
}