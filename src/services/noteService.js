import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class NoteService {
  getNotes() {
    return axios.get(`${API_URL}/notes/all`);
  }
  getNoteById(noteId) {
    return axios.get(`${API_URL}/notes/${noteId}`);
  }
  getNotesByCourseId(courseId) {
    return axios.get(`${API_URL}/courses/${courseId}/notes`);
  }
  saveNoteWithFile(formData) {
    return axios.post(`${API_URL}/notes/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}