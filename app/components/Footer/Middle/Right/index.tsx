import React from "react";
import Posts from "../../../Blocks/Posts";

export default function Right() {
  return (
    <>
      <Posts
        heading="Popular Posts"
        imageWidth={90}
        imageHeight={90}
        numberOfPosts={3}
      />
    </>
  );
}
