"use client";

import { useGlobalContext } from "@/app/context/store";
import React from "react";
import styles from "./SearchModal.module.scss";

export default function CloseButton() {
  const { setSearch } = useGlobalContext();
  return (
    <>
      <button className={styles.closeBtn} onClick={() => setSearch(false)}>
        close
      </button>
    </>
  );
}
