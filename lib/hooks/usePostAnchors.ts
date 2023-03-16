import { useEffect, useState } from "react";

export interface Anchor {
  title: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function usePostAnchors(anchor: string): Anchor[] {
  const [anchors, setAnchors] = useState<Anchor[]>([]);

  useEffect(() => {
    const nodes = [...document.getElementsByClassName(anchor)];

    const updatedAnchors: Anchor[] = nodes.map((node: Element) => {
      const title = node.innerHTML;

      const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        event.preventDefault();
        const targetElement = document.getElementById(
          node.getAttribute("id")!
        ) as HTMLElement;

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
      return { title, handleClick };
    });

    setAnchors(updatedAnchors);
  }, [anchor]);

  return anchors;
}

// WHOLE HOOK

// import { useEffect, useState } from "react";

// interface Anchor {
//   title: string;
//   handleClick: (event: MouseEvent) => void;
// }

// const usePostAnchors = (anchor: string): Anchor[] => {
//   const [anchors, setAnchors] = useState<Anchor[]>([]);

//   useEffect(() => {
//     const nodes = document.querySelectorAll(anchor);

//     const updatedAnchors: Anchor[] = Array.from(nodes).map((node) => {
//       const title = node.innerHTML;
//       const handleClick = (event: MouseEvent) => {
//         event.preventDefault();
//         const targetElement = document.querySelector(node.hash) as HTMLElement;
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       };
//       return { title, handleClick };
//     });

//     setAnchors(updatedAnchors);
//   }, [anchor]);

//   return anchors;
// };

// export default usePostAnchors;
