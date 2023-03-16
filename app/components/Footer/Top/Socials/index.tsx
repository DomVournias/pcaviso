import React from "react";
import socials from "../../../../../lib/data/socials.json";
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      {socials.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          data-network={social.label}
          aria-label={social.label}
          className={styles.url}
          key={social.label}
        >
          <span className={styles.icon}>
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d={social.path}></path>
            </svg>
          </span>

          <span className={styles.label}>{social.label}</span>
        </a>
      ))}
    </div>
  );
}
