import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Header,
  Message,
  Dropdown,
} from "semantic-ui-react";
import NoteService from "../services/noteService";
import DepartmentService from "../services/departmentService";
import { useNavigate } from "react-router-dom";
import "../styles/update-note.css";

export default function UpdateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [courseName, setCourseId] = useState("");
  const [departments, setDepartments] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const departmentService = new DepartmentService();
    departmentService
      .getDepartments()
      .then((result) => {
        const cleanedDepartments = cleanDepartmentNames(result.data);
        const uniqueDepartments = getUniqueDepartments(cleanedDepartments);
        setDepartments(uniqueDepartments);
        setFilteredDepartments(uniqueDepartments);
      })
      .catch((err) => {
        console.error("Bölümler alınırken hata oluştu: ", err);
        setError("Bölümler alınırken hata oluştu. Lütfen tekrar deneyin.");
      });
  }, []);

  const getUniqueDepartments = (departments) => {
    return [...new Set(departments)];
  };

  const cleanDepartmentNames = (departments) => {
    return departments.map((department) => {
      return department.replace(/\s*\(.*?\)/g, "").trim();
    });
  };

  const handleSearchChange = (e, { searchQuery }) => {
    setSearchTerm(searchQuery);
    if (searchQuery.trim() === "") {
      setFilteredDepartments(departments);
    } else {
      const filtered = departments.filter((dept) =>
        dept.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDepartments(filtered);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteService = new NoteService();

    if (!file || !title || !content || !courseName) {
      setError("Lütfen tüm alanları doldurun");
      return;
    }

    const sharerId = 3; // Kayıtlı kullanıcının ID'sini buradan alabilirsiniz

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("sharerId", sharerId);
      formData.append("courseName", courseName);

      await noteService.saveNoteWithFile(formData);
      setSuccess(true);
      setError(null);
      navigate("/notes"); // İşlem başarılı olduğunda notlar sayfasına yönlendir
    } catch (err) {
      setError("Not kaydedilirken hata oluştu. Lütfen tekrar deneyin.");
      setSuccess(false);
    }
  };

  return (
    <Container text className="update-note-container">
      <Header as="h2" textAlign="center" className="update-note-header">
        Not Yükle
      </Header>
      <Form
        onSubmit={handleSubmit}
        success={success}
        error={!!error}
        className="update-note-form"
      >
        <Form.Input
          fluid
          label="Başlık"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="update-note-field"
        />
        <Form.TextArea
          label="İçerik"
          placeholder="İçerik"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="update-note-field"
        />
        <Form.Input
          fluid
          type="file"
          label="Dosya"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="update-note-field"
        />
        <Form.Field className="update-note-field">
          <label>Bölüm Seçin</label>
          <Dropdown
            fluid
            search
            selection
            clearable
            options={filteredDepartments.map((dept, index) => ({
              key: index,
              text: dept,
              value: dept,
            }))}
            placeholder="Bölüm Seçin"
            onSearchChange={handleSearchChange}
            onChange={(e, { value }) => setCourseId(value)}
            value={courseName}
            className="update-note-dropdown"
          />
        </Form.Field>
        <Message
          success
          header="Başarılı"
          content="Not başarıyla kaydedildi"
          className="update-note-message"
        />
        <Message
          error
          header="Hata"
          content={error}
          className="update-note-message"
        />
        <Button type="submit" primary fluid className="update-note-button">
          Kayıt Et
        </Button>
      </Form>
    </Container>
  );
}
