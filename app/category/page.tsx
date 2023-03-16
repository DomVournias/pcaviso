import React from "react";
import getDynamicData from "@/lib/functions/getDynamicData";
import categoryPosts from "@/lib/queries/categoryPosts";
import PostCard from "../components/Cards/PostCard";
import formatPageTitle from "@/lib/utils/formatPageTitle";
import styles from "../../../styles/layout.module.scss";

const CategoryArchive = async ({ params: category_sub }: string | any) => {
  const { data } = await getDynamicData(categoryPosts(category_sub));

  const posts = data.posts.nodes;

  return (
    <>
      <div className={styles.cards}>
        {posts.map((post: any, index: any) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </>
  );
};

export default CategoryArchive;
