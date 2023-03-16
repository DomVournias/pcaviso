import getData from "@/lib/functions/getData";
import { MAIN } from "@/lib/queries/footerMenus";
import Link from "next/link";
import React from "react";
import styles from "./Menu.module.scss";

export default async function Menu() {
  const { menu } = await getData(MAIN);
  const links = menu.menuItems.nodes;
  return (
    <nav>
      <ul className={styles.links}>
        {links.map((link: any) => (
          <li key={link.id}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
