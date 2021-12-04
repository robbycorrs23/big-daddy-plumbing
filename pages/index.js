import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import MainHolder from "../components/MainHolder";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Big Daddy Plumbing</title>
        <meta name="description" content="Suffolk county plumbing services by former union plumber of over 25 years" />
      </Head>

      <main className={styles.main}>
        <h2>6 3 1 - 3 3 5 - 1 9 6 6</h2>

        <MainHolder />

    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Big Daddy Plumbing!!
        </a>
      </footer>
    </div>
  );
}
