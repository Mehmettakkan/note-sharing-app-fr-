import React, { useState, useEffect } from "react";
import {Icon, Menu, Table } from "semantic-ui-react";
import SharerService from "../services/sharerService";
import { Link } from "react-router-dom";

export default function SharerList() {
  const [sharers, setSharers] = useState([]);
  useEffect(() => {
    let sharerService = new SharerService();
    sharerService.getSharers().then((result) => setSharers(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soyisim</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Adı</Table.HeaderCell>
            <Table.HeaderCell>E-posta</Table.HeaderCell>
            <Table.HeaderCell>Şifre</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Yaş</Table.HeaderCell>
            <Table.HeaderCell>Cinsiyet</Table.HeaderCell>
            <Table.HeaderCell>Notlar</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sharers.map((sharer) => (
            <Table.Row key={sharer.id}>
              <Table.Cell>
                <Link to={`/sharer/${sharer.id}`}>{sharer.id}</Link>
              </Table.Cell>
              <Table.Cell>{sharer.firstName}</Table.Cell>
              <Table.Cell>{sharer.lastName}</Table.Cell>
              <Table.Cell>{sharer.userName}</Table.Cell>
              <Table.Cell>{sharer.email}</Table.Cell>
              <Table.Cell>{sharer.password}</Table.Cell>
              <Table.Cell>{sharer.phone}</Table.Cell>
              <Table.Cell>{sharer.age}</Table.Cell>
              <Table.Cell>{sharer.gender}</Table.Cell>
              <Table.Cell>
                <ul>
                  {sharer.notes.map((note) => (
                    <li key={note.id}>
                      <strong>{note.title}</strong>: {note.content} (Paylaşan:{" "}
                      {note.sharer}, Kurs: {note.course.courseName})
                    </li>
                  ))}
                </ul>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="10">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
