import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container fluid>
        <h2 className={styles.nameTitle}>Luis Felipe Vieira</h2>
        <div className={styles.introduction}>
          <h1 className={styles.mainTitle}>
            Desenvolvedor <br />
            FullStack
          </h1>
          <h3 className={styles.subTitle}>Soluções através da Tecnologia</h3>
        </div>
        <h1 className={styles.whatTitle}>Quem sou:</h1>
        <p className={styles.textLeft}>
          Programador Web com experiência em back e front end, com conhecimento
          em uma quantidade ampla de tecnologias.
        </p>
        <p className={styles.textRight}>
          O tôpico
          <Link className={styles.projectLink} href={"/projects"}>
            “Projetos”
          </Link>
          demonstra mais sobre minhas habilidades
        </p>
      </Container>
    </>
  );
}
