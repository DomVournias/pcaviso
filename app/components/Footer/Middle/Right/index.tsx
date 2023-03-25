import React from "react";
import Posts from "../../../Blocks/Posts";

export default function Right() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Posts
        heading="Popular Posts"
        imageWidth={90}
        imageHeight={90}
        numberOfPosts={3}
      />
    </>
  );
}
