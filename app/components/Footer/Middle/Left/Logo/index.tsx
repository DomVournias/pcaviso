import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logo.png";
import logoW from "./logoW.png";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={logo} height={50} alt="logo" className={styles.logo} />
      </Link>
      <Link href="/" data-hide-on-theme="light">
        <Image src={logoW} height={50} alt="logoW" className={styles.logoW} />
      </Link>
    </div>
  );
}
