"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Container fluid>
        <h1 className={styles.title}>Projetos</h1>
        <p className={styles.subtitle}>
          Meus projetos apresentados foram criados com base na linguagem de
          programação JavaScript/TypeScript <br /> E todos os códigos estão
          documentados no meu portifólio do GitHub
        </p>
        <Container className={styles.cardsContainer}>
          <Card style={{ width: "30rem" }} className={styles.card}>
            <Card.Img variant="top" src="/images/portifolio-card.jpg" />
            <Card.Body>
              <Card.Title>Portifolio</Card.Title>
              <Card.Text>
                <p>
                  Este portifolio foi criado com o intuito de demonstrar meus
                  projetos de forma simples e direto ao ponto.
                </p>
                <p>
                  Está página é uma SPA totalmente responsiva e é capaz de se
                  adaptar à tela de qualquer dispisitivo
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
      </Container>
    </>
  );
}
