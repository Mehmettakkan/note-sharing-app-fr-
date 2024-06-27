import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button as={Link} to="/login" primary>
          Giriş Yap
        </Button>
        <Button
          as={Link}
          to="/register"
          primary
          style={{ marginLeft: "0.5em" }}
        >
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
