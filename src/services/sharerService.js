import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class SharerService {
    getSharers() {
        return axios.get(`${API_URL}/api/sharers/all`);
    }

    getSharerById(sharerId) {
        return axios.get(`${API_URL}/api/sharers/${sharerId}`);
    }

    createSharer(sharer) {
        return axios.post(`${API_URL}/api/sharers/create`, sharer);
    }
}