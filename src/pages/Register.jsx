import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import SharerService from "../services/sharerService";
import "../styles/form.css";
import "../styles/register.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const sharerService = new SharerService();
    try {
      await sharerService.createSharer({
        firstName,
        lastName,
        userName,
        email,
        password,
        phone,
        age,
        gender,
      });
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError("Kayıt işlemi başarısız. Lütfen tekrar deneyin.");
      setSuccess(false);
    }
  };

  return (
    <CSSTransition in appear timeout={500} classNames="fade">
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h2" textAlign="center">
          Kayıt Ol
        </Header>
        <Segment padded="very">
          <Form onSubmit={handleSubmit} success={success} error={!!error}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="İsim"
                placeholder="İsim"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Form.Input
                fluid
                label="Soyisim"
                placeholder="Soyisim"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Input
              fluid
              label="Kullanıcı Adı"
              placeholder="Kullanıcı Adı"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
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
            <Form.Input
              fluid
              label="Telefon Numarası"
              placeholder="Telefon Numarası"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Form.Input
              fluid
              label="Yaş"
              placeholder="Yaş"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <Form.Select
              fluid
              label="Cinsiyet"
              options={[
                { key: "m", text: "Erkek", value: "Erkek" },
                { key: "f", text: "Kadın", value: "Kadın" },
                { key: "o", text: "Diğer", value: "Diğer" },
              ]}
              placeholder="Cinsiyet"
              value={gender}
              onChange={(e, { value }) => setGender(value)}
              required
            />
            <Message
              success
              header="Kayıt Başarılı"
              content="Başarıyla kayıt oldunuz."
            />
            <Message error header="Hata" content={error} />
            <Button type="submit" primary fluid>
              Kayıt Ol
            </Button>
          </Form>
        </Segment>
        <Message attached="bottom" warning>
          Zaten hesabınız var mı? <Link to="/login">Buradan giriş yapın</Link>
        </Message>
      </Container>
    </CSSTransition>
  );
}