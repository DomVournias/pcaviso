import React from "react";
import getData from "@/lib/functions/getData";
import getPostsByComments from "@/lib/queries/postsByComments";
import formatDate from "@/lib/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import styles from "./Posts.module.scss";

interface Props {
  heading: string;
  imageWidth: number;
  imageHeight: number;
  numberOfPosts: number;
}

export default async function Posts({
  heading,
  imageWidth,
  imageHeight,
  numberOfPosts,
}: Props) {
  const { posts } = await getData(getPostsByComments(numberOfPosts));

  return (
    <>
      <h4 className={styles.heading}>{heading}</h4>
      <ul className={styles.posts}>
        {posts.edges.map(({ node }: string | any) => (
          <li className={styles.post} key={node.id}>
            <Link href={`/${node.slug}`}>
              <div className={styles.image}>
                <Image
                  src={node.featuredImage.node.sourceUrl}
                  alt={node.featuredImage.node.altText}
                  width={imageWidth}
                  height={imageHeight}
                />
              </div>
              <div className={styles.info} id="post_block_info">
                <div className={styles.title}>{node.title}</div>
                <div className={styles.meta}>
                  <span>{formatDate(node.date)}</span>
                  {node.commentCount !== null && (
                    <>
                      <span> &nbsp;/&nbsp; </span>
                      <span>{`${node.commentCount} ${
                        node.commentCount > 1 ? "Comments" : "Comment"
                      }`}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
