"use client";

import { ThemeProvider } from "next-themes";
import { GlobalContextProvider } from "./context/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </ThemeProvider>
  );
}
