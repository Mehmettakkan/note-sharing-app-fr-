import React, { useState } from "react";
import { Form, Button, Container, Header, Message, Segment } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AuthService from "../services/authService";
import "../styles/form.css"; 
import "../styles/login.css";

export default function Login({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const authService = new AuthService();
    try {
      const response = await authService.login({
        email,
        password,
      });
      setLoading(false);
      setError(null);
      localStorage.setItem("token", response.data.token);
      onSignIn();
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError("Giriş işlemi başarısız. Lütfen tekrar deneyin.");
    }
  };

  return (
    <CSSTransition in appear timeout={500} classNames="fade">
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h2" textAlign="center">
          Giriş Yap
        </Header>
        <Segment padded="very">
          <Form onSubmit={handleSubmit} error={!!error} loading={loading}>
            <Form.Input
              fluid
              label="E-posta"
              placeholder="E-posta"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Input
              fluid
              label="Şifre"
              placeholder="Şifre"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Message error header="Hata" content={error} />
            <Button type="submit" primary fluid>
              Giriş Yap
            </Button>
          </Form>
        </Segment>
        <Message attached="bottom" warning>
          Henüz hesabınız yok mu? <Link to="/register">Buradan kayıt olun</Link>
        </Message>
      </Container>
    </CSSTransition>
  );
}