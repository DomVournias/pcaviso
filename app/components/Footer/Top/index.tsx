import React from "react";
import Menu from "./Menu";
import Socials from "./Socials";
import styles from "./Top.module.scss";

export default function Top() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Socials />
        <Menu />
      </div>
    </div>
  );
}
