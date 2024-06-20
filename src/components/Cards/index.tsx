"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Cards() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container
      className={styles.cardsContainer}
      data-aos="flip-left"
      data-aos-duration="1600"
    >
      <Card style={{ width: "30rem" }} className={styles.card}>
        <Card.Img variant="top" src="/images/portifolio-card.jpg" />
        <Card.Body>
          <Card.Title>Portifólio</Card.Title>
          <Card.Text>
            <p>
              Este portifólio foi criado com o intuito de demonstrar meus
              projetos de forma simples e direto ao ponto.
            </p>
            <p>
              Está página é uma SPA(Single Page Application) totalmente
              responsiva e é capaz de se adaptar à tela de qualquer dispisitivo
            </p>
            Ferramentas usadas no projeto: <br />
            <a
              target="_blank"
              href="https://nextjs.org/"
              className={styles.tecsOnPage}
            >
              Next.js
            </a>
            <br />
            <a
              target="_blank"
              href="https://getbootstrap.com/"
              className={styles.tecsOnPage}
            >
              Bootstrap
            </a>
            <br />
            <a
              target="_blank"
              href="https://sass-lang.com/"
              className={styles.tecsOnPage}
            >
              Sass
            </a>
          </Card.Text>
          <Link href={"/"}>
            <Button className={styles.cardButton} variant="dark">
              Ir para Home da Página
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
