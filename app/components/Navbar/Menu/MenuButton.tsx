"use client";

import { useClickOutside } from "@/lib/hooks/useClickOutside";
import React, { ReactNode, useState, useRef } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Button from "../Button";
import styles from "./MenuButton.module.scss";

interface Props {
  children?: ReactNode;
}

export default function MenuButton({ children }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, (event) => {
    setOpen(false);
  });
  return (
    <div className={styles.container} ref={ref}>
      <Button action={() => setOpen(!open)} active={false}>
        <HiOutlineBars3BottomLeft />
      </Button>
      <div
        ref={ref}
        className={`${styles.desktopMenu} ${
          open ? styles.active : styles.inactive
        }`}
      >
        {children}
      </div>
    </div>
  );
}
