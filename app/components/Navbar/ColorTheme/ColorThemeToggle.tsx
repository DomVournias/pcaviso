"use client";

import React, { useState, useEffect } from "react";
import { BiSun } from "react-icons/bi";
import { IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes";
import styles from "./ColorThemeToggle.module.scss";
import Button from "../Button";

export default function ColorThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleLightMode = () => {
    setTheme("light");
  };

  const toggleDarkMode = () => {
    setTheme("dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, [theme]);

  return (
    <>
      {currentTheme === "dark" ? (
        <Button action={toggleLightMode} active={false}>
          <BiSun />
        </Button>
      ) : (
        <Button action={toggleDarkMode} active={false}>
          <IoMdMoon />
        </Button>
      )}
    </>
  );
}
