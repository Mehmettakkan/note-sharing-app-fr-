import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class CourseService {
  getCourses() {
    return axios.get(`${API_URL}/api/courses/all`);
  }

  // getGroupedCourses() {
  //   return axios.get(`${API_URL}/api/courses/grouped`);
  // }
}