import Image from "next/image";
import styles from "./MainHolder.module.css";

export default function MainHolder() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/big-daddy-logo.jpg"
          alt="Big Daddy Logo"
          width={250}
          height={100}
          layout="fixed"
        />
      </div>
    </div>
  );
}
