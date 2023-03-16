import React from "react";
import styles from "./../Socials/Socials.module.scss";
import { MdAlternateEmail } from "react-icons/md";

export default function Info() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        We are committed to offering our readers the best and most up-to-date
        guides, reviews, and PC builds available.
      </p>
      <div className={styles.email}>
        <div className={styles.details}>
          <span className={styles.label}>Email:</span>
          <a href="mailto:mail@pcaviso.com" className={styles.link}>
            mail@pcaviso.com
          </a>
        </div>
        <div className={styles.icon} id="icon">
          <MdAlternateEmail />
        </div>
      </div>
    </div>
  );
}
