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
    </div>
  );
}
