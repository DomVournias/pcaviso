"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Portal from "../../Portals/Portal";
import Button from "../Button";
import SearchModal from "./SearchModal";
import { VscChromeClose } from "react-icons/vsc";

const SearchButton = () => {
  const { search, setSearch } = useGlobalContext();

  // console.log(search);

  return (
    <>
      {search ? (
        <Button action={() => setSearch(!search)} active={true}>
          <VscChromeClose />
        </Button>
      ) : (
        <Button action={() => setSearch(!search)} active={false}>
          <BiSearch />
        </Button>
      )}

      {search && (
        <Portal>
          <SearchModal />
        </Portal>
      )}
    </>
  );
};

export default SearchButton;
