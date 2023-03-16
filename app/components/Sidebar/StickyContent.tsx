"use client";

import React, { useState } from "react";
import Anchors from "../Blocks/Anchors";
import styles from "./Sidebar.module.scss";

export default function StickyContent() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div className={styles.sticky}>
      <div className={styles.block}>Ad Placement</div>
      {visible && (
        <div className={`${styles.block} ${styles.sticky}`}>
          <Anchors setVisible={setVisible} />
        </div>
      )}
    </div>
  );
}
