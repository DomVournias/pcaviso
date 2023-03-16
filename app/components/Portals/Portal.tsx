"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const portalNode = document.querySelector("#myportal");

  return mounted && portalNode ? createPortal(children, portalNode) : null;
};

export default Portal;
