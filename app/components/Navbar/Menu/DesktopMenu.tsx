import Link from "next/link";
import React from "react";
import styles from "./DesktopMenu.module.scss";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import getData from "@/lib/functions/getData";
import MAIN_MENU from "@/lib/queries/mainMenu";

interface MenuData {
  id: string;
  path: string;
  label: string;
  parentId: string;
  childItems?: {
    nodes: MenuData[];
  };
}

interface Props {
  menu: {
    nodes: MenuData[];
  };
}

const DesktopMenu = async () => {
  const data = await getData(MAIN_MENU);

  const mainItems = data?.menu?.menuItems.nodes;

  return (
    <nav className={styles.menu}>
      <ul className={styles.main_menu}>
        {mainItems.map((item: any) => (
          <li key={item.id} className={styles.links}>
            <Link href={item.path} className={styles.main_links}>
              {item.label}
              {item.childItems && item.childItems.nodes.length > 0 && (
                <FiChevronRight />
              )}
            </Link>
            {item.childItems && item.childItems.nodes.length > 0 && (
              <div className={`${styles.sub_menu} `}>
                <ul>
                  {item.childItems.nodes.map((subItem: any) => (
                    <li key={subItem.id}>
                      <Link href={subItem.path} className={styles.sub_links}>
                        {subItem.label}
                        {subItem.childItems &&
                          subItem.childItems.nodes.length > 0 && (
                            <FiChevronRight />
                          )}
                      </Link>
                      {subItem.childItems &&
                        subItem.childItems.nodes.length > 0 && (
                          <div
                            className={`${styles.sub_menu} ${styles.extra_menu} `}
                          >
                            <ul>
                              {subItem.childItems.nodes.map(
                                (subItemExtra: any) => (
                                  <li key={subItemExtra.id}>
                                    <Link
                                      href={subItemExtra.path}
                                      className={styles.sub_links}
                                    >
                                      {subItemExtra.label}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
