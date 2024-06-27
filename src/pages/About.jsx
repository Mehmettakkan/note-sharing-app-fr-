import React from "react";
import { Container, Header, Segment, Icon } from "semantic-ui-react";
import { motion } from "framer-motion";
import "../styles/about.css"; // CSS dosyasını import edin

export default function About() {
  return (
    <Container className="about-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header as="h2" icon textAlign="center">
          <Icon name="info circle" />
          Hakkında
          <Header.Subheader>
            Uygulamamız hakkında daha fazla bilgi edinin
          </Header.Subheader>
        </Header>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Segment>
          <p>
            Bu uygulama, üniversite öğrencilerinin ders notlarını paylaşmasını ve
            bu notlar üzerinden kolayca erişim sağlamasını amaçlamaktadır. Amacımız, 
            öğrencilerin birbirleriyle bilgi alışverişinde bulunmalarını sağlamak 
            ve eğitim hayatlarını daha verimli hale getirmektir.
          </p>
          <p>
            Uygulamamızda yer alan özellikler:
            <ul>
              <li>Ders notlarını kolayca paylaşma</li>
              <li>Favori notlarınızı kaydetme</li>
              <li>Notlar üzerinde arama yapma</li>
              <li>Kategorilere göre notları filtreleme</li>
            </ul>
          </p>
          <p>
            Bizimle iletişime geçmek için lütfen <a href="/contact">iletişim</a> sayfamızı ziyaret edin.
          </p>
        </Segment>
      </motion.div>
    </Container>
  );
}