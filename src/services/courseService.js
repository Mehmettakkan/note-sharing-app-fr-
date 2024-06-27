import axios from "axios";

export default class CourseService {
  getCourses() {
    return axios.get('http://localhost:8080/api/courses/all');
  }

  // getGroupedCourses() {
  //   return axios.get('http://localhost:8080/api/courses/grouped');
  // }
}