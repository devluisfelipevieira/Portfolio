import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Cards from "@/components/Cards";

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
      </Container>
      <Cards />
    </>
  );
}
