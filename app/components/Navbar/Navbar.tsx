import React from "react";
import Image from "next/image";
import logo from "./logo.png";
import logoW from "./logoW.png";
import Link from "next/link";
import SearchButton from "./Search/SearchBtn";
import styles from "./Navbar.module.scss";
import ColorThemeToggle from "./ColorTheme/ColorThemeToggle";
import MenuButton from "./Menu/MenuButton";
import DesktopMenu from "./Menu/DesktopMenu";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <div className={`${styles.buttons} ${styles.start}`}>
          <MenuButton>
            {/* @ts-expect-error Server Component */}
            <DesktopMenu />
          </MenuButton>
          <ColorThemeToggle />
          {/* <NavLinks /> */}
        </div>
        <div className={styles.middle}>
          <Link href="/" data-hide-on-theme="dark" className={styles.logo}>
            <Image src={logo} height={45} alt="logo" />
          </Link>
          <Link href="/" data-hide-on-theme="light" className={styles.logoW}>
            <Image src={logoW} height={45} alt="logoW" />
          </Link>
        </div>

        <div className={`${styles.buttons} ${styles.end}`}>
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
