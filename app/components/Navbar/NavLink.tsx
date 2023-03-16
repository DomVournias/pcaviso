import Link from "next/link";
import React, { useState } from "react";
import styles from "./NavLinks.module.scss";

interface Props {
  id: string;
  path: string;
  label: string;
}

const NavLink = ({ id, path, label }: Props) => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const onHoverEnter = (id: string) => {
    setActiveMenuItem(id);
  };

  const onHoverExit = () => {
    setActiveMenuItem(null);
  };


  return (
    <Link
      href={path}
      className={styles.sub_links}
      onMouseEnter={() => onHoverEnter(id)}
      onMouseLeave={() => onHoverExit()}
    >
      {label}
    </Link>
  );
};

export default NavLink;
