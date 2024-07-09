import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class NoteService {
  getNotes() {
    return axios.get(`${API_URL}/api/notes/all`);
  }
  getNoteById(noteId) {
    return axios.get(`${API_URL}/api/notes/${noteId}`);
  }
  getNotesByCourseId(courseId) {
    return axios.get(`${API_URL}/api/courses/${courseId}/notes`);
  }
  saveNoteWithFile(formData) {
    return axios.post(`${API_URL}/api/notes/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  downloadFile(fileName) {
    return axios.get(`${API_URL}/api/notes/files/${fileName}`, {
      responseType: "blob",
    });
  }
}
