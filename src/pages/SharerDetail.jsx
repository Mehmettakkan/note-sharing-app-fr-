import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment, Grid, Icon, List } from "semantic-ui-react";
import SharerService from "../services/sharerService";

export default function SharerDetail() {
  let { id } = useParams();
  const [sharer, setSharer] = useState(null);

  useEffect(() => {
    let sharerService = new SharerService();
    sharerService
      .getSharerById(id)
      .then((result) => setSharer(result.data));
  }, [id]);

  if (!sharer) {
    return <div>Loading...</div>; // Veriler yüklenirken gösterilecek içerik
  }

  return (
    <Container style={{ marginTop: '2em' }}>
      <Segment raised>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image
                centered
                size="large"
                src="https://media.licdn.com/dms/image/D4D03AQGXZLotQ_VAOw/profile-displayphoto-shrink_800_800/0/1712975813318?e=1724284800&v=beta&t=5jaachO1WCyf75KBjjkviE4V9JExB97gCCi9_PsEBWw"
                style={{ marginBottom: "2em" }}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h1">{sharer.firstName} {sharer.lastName}</Header>
              <Header as="h3">
                <Icon name='user' />
                Kullanıcı Adı: {sharer.userName}
              </Header>
              <Header as="h4">
                <Icon name='envelope' />
                E-posta: {sharer.email}
              </Header>
              {sharer.description && (
                <p style={{ fontSize: '1.2em', marginTop: '1em' }}>{sharer.description}</p>
              )}
              <Header as="h3">
                Paylaşılan Notlar
              </Header>
              <List divided relaxed>
                {sharer.notes.map(note => (
                  <List.Item key={note.id}>
                    <List.Icon name='file alternate outline' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as={Link} to={`/notes/${note.id}`}>
                        {note.title}
                      </List.Header>
                      <List.Description>
                        {note.content.length > 100 ? `${note.content.substring(0, 100)}...` : note.content}
                      </List.Description>
                      <List.Description>
                        <strong>Kurs:</strong> {note.course.courseName}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
              <div className="ui two buttons" style={{ marginTop: '2em' }}>
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}