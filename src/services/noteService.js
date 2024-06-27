import axios from "axios";

export default class NoteService {
  getNotes() {
    return axios.get("http://localhost:8080/api/notes/all");
  }
  getNoteById(noteId) {
    return axios.get(`http://localhost:8080/api/notes/${noteId}`);
  }
  getNotesByCourseId(courseId) {
    return axios.get(`http://localhost:8080/api/courses/${courseId}/notes`);
  }
  saveNoteWithFile(formData) {
    return axios.post("http://localhost:8080/api/notes/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
