import React from "react";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Top />
      <Middle />
      <Bottom />
    </footer>
  );
}
