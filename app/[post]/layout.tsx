import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Layout.module.scss";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.content}>{children}</section>
        <Sidebar />
      </div>
    </div>
  );
}
