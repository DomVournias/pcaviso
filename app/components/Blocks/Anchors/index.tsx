"use client";

import usePostAnchors, { Anchor } from "@/lib/hooks/usePostAnchors";
import React from "react";

interface Props {
  setVisible: (visible: boolean) => void;
}

const Anchors = ({ setVisible }: Props) => {
  const anchors: Anchor[] = usePostAnchors("heading");

  if (anchors.length === 0) {
    setVisible(false);
  } else {
    setVisible(true);
  }
  return (
    <ul>
      {anchors.map((anchor) => (
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            anchor.handleClick(event)
          }
          key={anchor.title}
        >
          <li>{anchor.title}</li>
        </button>
      ))}
    </ul>
  );
};

export default Anchors;
