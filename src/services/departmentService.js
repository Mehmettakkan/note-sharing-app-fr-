import axios from "axios";

const DEPARTMENTS_API_URL = "https://raw.githubusercontent.com/furkankatman/bolumlerJSON/main/bolumler.json";

export default class DepartmentService {
  getDepartments() {
    return axios.get(DEPARTMENTS_API_URL);
  }
}