import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";

export default function Favorites() {
  const { favoriteItems } = useSelector((state) => state.favorite);

  return (
    <Dropdown item text="Favorilerim">
      <Dropdown.Menu>
        {favoriteItems.map((favoriteItem) => (
          <Dropdown.Item as={Link} to={`/notes/${favoriteItem.note.id}`} key={favoriteItem.note.id}>
            {favoriteItem.note.title}
            <Label color="teal" style={{ marginLeft: '10px' }}>
              {favoriteItem.quantity}
            </Label>
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/favorites">
          Tümünü görüntüle
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}