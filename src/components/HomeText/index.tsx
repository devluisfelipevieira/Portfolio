"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomeText() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container fluid>
        <h2 className={styles.nameTitle}>Luis Felipe Vieira</h2>
        <div
          className={styles.introduction}
          data-aos="zoom-in"
          data-aos-duration="1600"
        >
          <h1 className={styles.mainTitle}>
            Desenvolvedor <br />
            FullStack
          </h1>
          <h3 className={styles.subTitle}>Soluções através da Tecnologia</h3>
        </div>
        <h1 className={styles.whatTitle}>Quem sou:</h1>
        <div
          className={styles.ofMe}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className={styles.textLeft}>
            <p>
              Programador Web com experiência em back e front end, com
              conhecimento em uma quantidade ampla de tecnologias.
            </p>
          </div>
          <div className={styles.textRight}>
            <p>
              O tôpico
              <Link className={styles.projectLink} href={"/projects"}>
                “Projetos”
              </Link>{" "}
              <br />
              demonstra mais sobre minhas habilidades
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
