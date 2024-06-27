import React, { useState } from "react";
import { Menu, Container, Input, Image, Icon } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import Favorites from "./Favorites";
import "../styles/navi.css";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  // const { favoriteItems } = useSelector((state) => state.favorite);

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
    navigate("/"); // Redirect to home page after login
  }

  return (
    <Menu inverted fixed="top" className="navi-menu">
      <Container>
        <Menu.Item as={Link} to="/" header className="navi-logo-item">
          <Image size="mini" src="/note-icon.webp" className="navi-logo" />
          Not Paylaşım
        </Menu.Item>
        <Menu.Item as={Link} to="/notes" className="navi-item">
          Ders Notları
        </Menu.Item>
        <Menu.Item as={Link} to="/about" className="navi-item">
          Hakkında
        </Menu.Item>
        <Menu.Item as={Link} to="/contact" className="navi-item">
          İletişim
        </Menu.Item>
        <Menu.Item position="center">
          <Input icon="search" placeholder="Aramak..." />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/update-note"
          className="navi-item"
          position="right"
        >
          <Icon name="plus circle" />
          Yükle
        </Menu.Item>
        <Menu.Menu position="right">
          {isAuthenticated && <Favorites />}
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} />
          ) : (
            <SignedOut signIn={handleSignIn} />
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
