import React, { useState, useEffect } from "react";
import { Input, Menu, Icon } from "semantic-ui-react";
import CourseService from "../services/courseService";
import { useNavigate } from "react-router-dom";
import "../styles/categories.css";

export default function Categories({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let courseService = new CourseService();
    courseService.getCourses().then((result) => setCourses(result.data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryClick = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
    navigate(`/courses/${id}`);
  };

  const handleNoteClick = (noteId) => {
    navigate(`/notes/${noteId}`);
  };

  const filteredCategories = courses
    .filter((course) =>
      course.courseName?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((course) => ({
      ...course,
      noteCount: course.notes.length,
    }));

  return (
    <div className="categories-container">
      <Menu vertical className="categories-menu">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Ara..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="categories-search"
          />
        </Menu.Item>
        {filteredCategories.map((course) => (
          <div key={course.id}>
            <Menu.Item
              className="category-item"
              onClick={() => handleCategoryClick(course.id)}
            >
              <span>
                {course.courseName}{" "}
                <span className="category-count">({course.noteCount})</span>
              </span>
              <Icon
                name={
                  expandedCategory === course.id ? "angle up" : "angle down"
                }
              />
            </Menu.Item>
            {expandedCategory === course.id && (
              <div className="subcategories-menu">
                {course.notes.map((note) => (
                  <Menu.Item
                    key={note.id}
                    className="subcategory-item"
                    onClick={() => handleNoteClick(note.id)}
                  >
                    {note.title}
                  </Menu.Item>
                ))}
              </div>
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
}
