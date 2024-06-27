import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Image,
  Segment,
  Grid,
  Icon,
} from "semantic-ui-react";
import NoteService from "../services/noteService";

export default function NoteDetail() {
  let { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    let noteService = new NoteService();
    noteService.getNoteById(id).then((result) => setNote(result.data));
  }, [id]);

  if (note === null) {
    return <div>Loading...</div>; // Veriler yüklenirken gösterilecek içerik
  }

  // Tarihi parse etme
  const sharedDate = note.sharedDate
    ? new Date(note.sharedDate).toLocaleDateString()
    : "Tarih bilgisi yok";

  return (
    <Container style={{ marginTop: "2em" }}>
      <Segment raised>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image
                centered
                size="large"
                src="https://st.depositphotos.com/9876904/51230/v/450/depositphotos_512304036-stock-illustration-blank-math-template-math-tools.jpg"
                style={{ marginBottom: "2em" }}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h1">{note.title || "Başlık yok"}</Header>
              <Header as="h3">
                <Icon name="calendar alternate outline" />
                {sharedDate}
              </Header>
              {note.sharer ? (
                <Header as="h4">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQGXZLotQ_VAOw/profile-displayphoto-shrink_800_800/0/1712975813318?e=1724284800&v=beta&t=5jaachO1WCyf75KBjjkviE4V9JExB97gCCi9_PsEBWw"
                    alt="User Icon"
                    style={{ width: 30, height: 30, borderRadius: "50%" }}
                  />
                  Paylaşan: {note.sharer.firstName} {note.sharer.lastName}
                </Header>
              ) : (
                <Header as="h4">Paylaşan bilgisi yok</Header>
              )}
              {note.course ? (
                <Header as="h4">
                  <Icon name="university" /> Kurs: {note.course.courseName}
                </Header>
              ) : (
                <Header as="h4">Kurs bilgisi yok</Header>
              )}
              <p style={{ fontSize: "1.2em", marginTop: "1em" }}>
                {note.content || "İçerik yok"}
              </p>
              <Button
                as="a"
                href={note.downloadUrl || "#"}
                color="blue"
                size="large"
                style={{ marginTop: "1em" }}
              >
                <Icon name="download" />
                Belgeyi İndirmek İçin Buraya Tıklayın
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}
