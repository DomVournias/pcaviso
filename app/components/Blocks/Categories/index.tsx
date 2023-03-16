import React from "react";
import getData from "@/lib/functions/getData";
import { CATEGORIES } from "@/lib/queries/footerMenus";
import styles from "./Categories.module.scss";

export default async function Categories() {
  const { categories } = await getData(CATEGORIES);

  return (
    <>
      <h4 className={styles.heading}>Categories</h4>
      <ul className={styles.categories}>
        {categories.nodes.map((category: any) => (
          <li key={category.id}>
            <a href={category.uri}>{category.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
