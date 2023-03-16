"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface SearchProps {
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContext = createContext<SearchProps>({
  search: false,
  setSearch: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [search, setSearch] = useState(false);

  return (
    <GlobalContext.Provider value={{ search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
