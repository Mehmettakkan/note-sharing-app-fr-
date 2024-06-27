import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Container, Image, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { removeFromFavorite } from "../store/actions/favoriteActions";
import { toast } from "react-toastify";
import "../styles/favorite-note.css"; // Updated CSS file name

export default function FavoriteNote() {
  const { favoriteItems } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleRemoveFromFavorite = (noteId) => {
    dispatch(removeFromFavorite(noteId));
    toast.success(`Not favorilerden kaldırıldı.`);
  };

  return (
    <Container className="favorite-note-container">
      <h2>Favori Notlar</h2>
      <div className="favorite-note-grid">
        {favoriteItems.length === 0 ? (
          <p>Henüz favorilere eklenmiş not yok.</p>
        ) : (
          favoriteItems.map((favoriteItem) => (
            <div key={favoriteItem.note.id} className="favorite-note-column">
              <Card className="favorite-note-card">
                <Image
                  src={
                    favoriteItem.note.image ||
                    "https://st.depositphotos.com/9876904/51230/v/450/depositphotos_512304036-stock-illustration-blank-math-template-math-tools.jpg"
                  }
                  wrapped
                  ui={false}
                  className="favorite-note-image"
                />
                <Card.Content className="favorite-note-card-content">
                  <Card.Header className="favorite-note-card-header">
                    {favoriteItem.note.title}
                  </Card.Header>
                  <Card.Meta className="favorite-note-card-meta">
                    <Icon name="calendar alternate outline" />
                    {new Date(
                      favoriteItem.note.sharedDate
                    ).toLocaleDateString()}
                  </Card.Meta>
                  <Card.Description className="favorite-note-card-description">
                    <Icon name="book" /> <strong>Ders:</strong>{" "}
                    {favoriteItem.note.content}
                  </Card.Description>
                  <Card.Description className="favorite-note-card-description">
                    <Icon name="user" /> <strong>Paylaşan:</strong>{" "}
                    {favoriteItem.note.sharer.firstName}{" "}
                    {favoriteItem.note.sharer.lastName}
                  </Card.Description>
                  <Card.Content extra className="favorite-note-card-footer">
                    <Image
                      src="https://media.licdn.com/dms/image/D4D03AQGXZLotQ_VAOw/profile-displayphoto-shrink_800_800/0/1712975813318?e=1724284800&v=beta&t=5jaachO1WCyf75KBjjkviE4V9JExB97gCCi9_PsEBWw"
                      avatar
                      className="favorite-note-author-avatar"
                    />
                    <span className="favorite-note-author-info">
                      {favoriteItem.note.sharer.firstName}{" "}
                      {favoriteItem.note.sharer.lastName}
                    </span>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button
                        as={Link}
                        to={`/notes/${favoriteItem.note.id}`}
                        secondary
                      >
                        Detay
                      </Button>
                      <Button
                        color="red"
                        onClick={() =>
                          handleRemoveFromFavorite(favoriteItem.note.id)
                        }
                      >
                        Favorilerden Kaldır
                      </Button>
                    </div>
                  </Card.Content>
                </Card.Content>
              </Card>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
