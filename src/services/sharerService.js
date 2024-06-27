import axios from "axios";

export default class SharerService {
    getSharers() {
        return axios.get('http://localhost:8080/api/sharers/all');
    }

    getSharerById(sharerId) {
        return axios.get(`http://localhost:8080/api/sharers/${sharerId}`);
    }

    createSharer(sharer) {
        return axios.post('http://localhost:8080/api/sharers/create', sharer);
    }
}