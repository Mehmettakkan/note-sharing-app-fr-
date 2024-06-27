import React, { useState, useEffect } from "react";
import { Card, Image, Button, Container, Icon } from "semantic-ui-react";
import NoteService from "../services/noteService";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../store/actions/favoriteActions";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import "../styles/note-list.css";

export default function NoteList({ searchTerm }) {
  const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();
  const { courseId, noteId } = useParams();
  const { favoriteItems } = useSelector((state) => state.favorite);

  useEffect(() => {
    let noteService = new NoteService();
    if (courseId) {
      noteService
        .getNotesByCourseId(courseId)
        .then((result) => setNotes(result.data));
    } else if (noteId) {
      noteService.getNoteById(noteId).then((result) => setNotes([result.data]));
    } else {
      noteService.getNotes().then((result) => setNotes(result.data));
    }
  }, [courseId, noteId]);

  const handleAddToFavorite = (note) => {
    const isAlreadyFavorite = favoriteItems.some(
      (item) => item.note.id === note.id
    );

    if (isAlreadyFavorite) {
      toast.error(`${note.title} zaten favorilerde.`);
    } else {
      dispatch(addToFavorite(note));
      toast.success(`${note.title} favorilere eklendi.`);
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <Container className="note-list-container">
      <div className="note-grid">
        {filteredNotes.map((note) => (
          <div key={note.id} className="note-column">
            <Card className="note-card">
              <Image
                src={
                  note.image ||
                  "https://st.depositphotos.com/9876904/51230/v/450/depositphotos_512304036-stock-illustration-blank-math-template-math-tools.jpg"
                }
                wrapped
                ui={false}
                className="note-image"
              />
              <Card.Content className="card-content">
                <Card.Header className="card-header">{note.title}</Card.Header>
                <Card.Meta className="card-meta">
                  <Icon name="calendar alternate outline" />
                  {new Date(note.sharedDate).toLocaleDateString()}
                </Card.Meta>
                <Card.Description className="card-description">
                  <Icon name="book" /> <strong>Ders:</strong> {note.content}
                </Card.Description>
                <Card.Description className="card-description">
                  <Icon name="user" /> <strong>Paylaşan:</strong>{" "}
                  {note.sharer.firstName} {note.sharer.lastName}
                </Card.Description>
                <Card.Content extra className="card-footer">
                  <Image
                    src="https://media.licdn.com/dms/image/D4D03AQGXZLotQ_VAOw/profile-displayphoto-shrink_800_800/0/1712975813318?e=1724284800&v=beta&t=5jaachO1WCyf75KBjjkviE4V9JExB97gCCi9_PsEBWw"
                    avatar
                    className="author-avatar"
                  />
                  <span className="author-info">
                    {note.sharer.firstName} {note.sharer.lastName}
                  </span>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button primary onClick={() => handleAddToFavorite(note)}>
                      Favoriye Ekle
                    </Button>
                    <Button as={Link} to={`/notes/${note.id}`} secondary>
                      Detay
                    </Button>
                  </div>
                </Card.Content>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
