import React from "react";
import styles from "../Bottom.module.scss";

export default function Copyright() {
  function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return currentYear;
  }
  return (
    <div className={styles.copyright}>
      <p>Copyright © {getCurrentYear()} PCAVISO | PC Builds - Guides & Tips</p>
    </div>
  );
}
