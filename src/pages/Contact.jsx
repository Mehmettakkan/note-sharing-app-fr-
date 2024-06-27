import React from "react";
import { Container, Header, Segment, Icon, Form, Button } from "semantic-ui-react";
import { motion } from "framer-motion";
import "../styles/contact.css"; // CSS dosyasını import edin

export default function Contact() {
  return (
    <Container className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header as="h2" icon textAlign="center">
          <Icon name="phone" />
          İletişim
          <Header.Subheader>
            Bizimle iletişime geçmek için aşağıdaki formu doldurun
          </Header.Subheader>
        </Header>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Segment>
          <Form>
            <Form.Field>
              <label>Adınız</label>
              <input placeholder="Adınız" />
            </Form.Field>
            <Form.Field>
              <label>E-posta</label>
              <input placeholder="E-posta" />
            </Form.Field>
            <Form.Field>
              <label>Mesajınız</label>
              <textarea placeholder="Mesajınız" />
            </Form.Field>
            <Button type="submit" primary>Gönder</Button>
          </Form>
        </Segment>
        <Segment>
          <p>
            Ayrıca bize aşağıdaki iletişim bilgileri üzerinden ulaşabilirsiniz:
          </p>
          <p>
            <strong>E-posta:</strong> info@notpaylasim.com
          </p>
          <p>
            <strong>Telefon:</strong> +90 123 456 7890
          </p>
        </Segment>
      </motion.div>
    </Container>
  );
}