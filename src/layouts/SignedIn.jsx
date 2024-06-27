import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/D4D03AQGXZLotQ_VAOw/profile-displayphoto-shrink_800_800/0/1712975813318?e=1724284800&v=beta&t=5jaachO1WCyf75KBjjkviE4V9JExB97gCCi9_PsEBWw"
        />
        <Dropdown
          pointing="top right"
          text="Mehmet"
          className="animated-dropdown"
        >
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/profile"
              text="Bilgilerim"
              icon="info"
            />
            <Dropdown.Item
              as={Link}
              to="/my-notes"
              text="Paylaştığım Notlar"
              icon="sticky note"
            />
            <Dropdown.Item
              as={Link}
              to="/favorites"
              text="Favorilerim"
              icon="heart"
            />
            <Dropdown.Item
              as={Link}
              to="/notifications"
              text="Bildirimler"
              icon="bell"
            />
            <Dropdown.Item
              as={Link}
              to="/settings"
              text="Ayarlar"
              icon="settings"
            />
            <Dropdown.Item
              as={Link}
              to="/privacy"
              text="Gizlilik"
              icon="privacy"
            />
            <Dropdown.Item
              as={Link}
              to="/help"
              text="Yardım"
              icon="help circle"
            />
            <Dropdown.Divider />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
