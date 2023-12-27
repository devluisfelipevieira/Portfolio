"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "../../../node_modules/next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className={styles.header}>
        <Container>
          <Nav className={styles.pageLinks}>
            <Link className={styles.navbar} href="/">
              Home
            </Link>
            <Link className={styles.navbar} href="/projects">
              Projetos
            </Link>
          </Nav>
          <Nav>
            <Link href={"/"}>
              <img className={styles.logo} src="/images/logo.png" alt="logo" />
            </Link>
          </Nav>
          <Nav className={styles.contactIcons}>
            <a target="_blank" href="https://github.com/devluisfelipevieira">
              <img
                className={styles.icon}
                src="/images/github.png"
                alt="logo"
              />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5524992204099&text&type=phone_number&app_absent=0"
            >
              <img className={styles.icon} src="/images/wtzp.png" alt="logo" />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/luis-felipe-vieira-79823b22a"
            >
              <img
                className={styles.icon}
                src="/images/linkedin.png"
                alt="logo"
              />
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
