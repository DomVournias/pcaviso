import React from "react";
import Copyright from "./Copyright";
import styles from "./Bottom.module.scss";

export default function Bottom() {
  return (
    <div className={styles.container}>
      <Copyright />
    </div>
  );
}
