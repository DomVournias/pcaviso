import React from "react";
import getData from "@/lib/functions/getData";
import { getPostBySlug } from "@/lib/queries/singlePost";
import Image from "next/image";
import styles from "./Post.module.scss";
import formatDate from "@/lib/utils/formatDate";
import Link from "next/link";

export default async function Post({
  params: { post },
}: {
  params: { post: string };
}) {
  const { postBy } = await getData(getPostBySlug(post));

  // console.log(postBy.data.postBy);

  const title = postBy.title;
  const date = formatDate(postBy.date);
  const featuredImage = postBy.featuredImage.node.sourceUrl;
  const featuredImageAlt = postBy.featuredImage.node.altText;
  const authorAvatar = postBy.author.node.avatar.url;
  const authorName = postBy.author.node.name;
  const article = postBy.content;

  return (
    <article className={styles.article}>
      <div className={styles.featuredImage}>
        <Image src={featuredImage} alt={featuredImageAlt} fill />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        <span className={styles.avatar}>
          <Image src={authorAvatar} alt={authorName} width={25} height={25} />
        </span>
        <span>{authorName}</span>
        <span>/</span>
        <time>{date}</time>
        <span>/</span>
        <span className={styles.terms}>
          {postBy.terms.nodes.map(
            (
              { name, uri }: { name: string; uri: string },
              index: number,
              array: any[]
            ) => (
              <Link href={uri} key={index}>
                {name}
                {index !== array.length - 1 && ","}&nbsp;
              </Link>
            )
          )}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article }}></div>
    </article>
  );
}
