import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>About</h4>
      <a href="/privacy-policy" className={styles.link}>
        Privacy Policy
      </a>
    </div>
  );
}
