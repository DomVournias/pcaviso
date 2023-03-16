import React, { Children, useState } from "react";
import Categories from "../Blocks/Categories";
import Posts from "../Blocks/Posts";
import StickyContent from "./StickyContent";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const blocks = [
    {
      id: 1,
      component: <Categories />,
    },
    {
      id: 2,
      component: (
        <Posts
          heading="Posts"
          imageWidth={70}
          imageHeight={70}
          numberOfPosts={5}
        />
      ),
    },
  ];

  return (
    <aside className={styles.sidebar}>
      {blocks.map((block) => (
        <div className={styles.block} key={block.id}>
          {block.component}
        </div>
      ))}

      <StickyContent />
    </aside>
  );
}
