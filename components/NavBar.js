// import Nav from "react-bootstrap/Nav";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <Menu>
        <Link id="home" className={styles.menuItem} href="/">
          Home
        </Link>
        <Link id="about" className={styles.menuItem} href="/about">
          About
        </Link>
        <Link id="contact" className={styles.menuItem} href="/contact">
          Contact
        </Link>
        <Link id="services" className={styles.menuItem} href="/services">
          Services
        </Link>
      </Menu>
    </>
  );
}
