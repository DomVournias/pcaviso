import React from "react";
import About from "./About";
import Categories from "../../../Blocks/Categories";

export default function Center() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Categories />
      <About />
    </>
  );
}
