import Image from "next/image";
import styles from "./MainHolder.module.css";

export default function MainHolder() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/big-daddy-logo.jpg"
          alt="Big Daddy Logo"
          width={220}
          height={100}
          layout="intrinsic"
        />
      </div>
      <p className={styles.trust}>
        Trust the team at Big Daddy Plumbing! With over 30 years in the
        business, there is no job too big or too small.
      </p>
      <hr />
      <h1 className={styles.header}>Dependable Plumbing and Heating Contractor located in Baiting Hollow</h1>
      <div className={styles.btnGroup}>
        <button className={styles.msgBtn}>Send a message</button>
        <button className={styles.svcBtn}>Check out our services</button>
      </div>
    </div>
  );
}
