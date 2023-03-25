import React from "react";
import Categories from "../Blocks/Categories";
import Posts from "../Blocks/Posts";
import StickyContent from "./StickyContent";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.block}>
        {/* @ts-expect-error Server Component */}
        <Categories />
      </div>
      <div className={styles.block}>
        {/* @ts-expect-error Server Component */}
        <Posts
          heading="Posts"
          imageWidth={70}
          imageHeight={70}
          numberOfPosts={5}
        />
      </div>
      <StickyContent />
    </aside>
  );
}
