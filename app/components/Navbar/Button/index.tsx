import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  action: () => void;
  active: boolean;
}

export default function Button({ children, action, active }: ButtonProps) {
  return (
    <button
      className={`${styles.block} ${active ? styles.active : styles.inactive}`}
      onClick={action}
    >
      <span className={styles.inner}>{children}</span>
    </button>
  );
}
