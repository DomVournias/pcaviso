import React from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";
import styles from "./Middle.module.scss";

export default function Middle() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Left />
        </div>
        <div className={styles.center}>
          <Center />
        </div>
        <div className={styles.right}>
          <Right />
        </div>
      </div>
    </div>
  );
}
