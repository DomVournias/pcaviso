import { RefObject } from "react";

export const getRefElement = <T>(
  element?: RefObject<Element> | T
): Element | T | undefined | null => {
  if (element && !(typeof element === "object" && "current" in element)) {
    return element as Element | T;
  }

  return (element as RefObject<Element>)?.current ?? null;
};
