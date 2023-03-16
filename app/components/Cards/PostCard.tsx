import formatDate from "@/lib/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./PostCard.module.scss";

type Author = {
  node: {
    name: string;
  };
};

type FeaturedImage = {
  node: {
    sourceUrl: string;
    altText: string;
  };
};

type Term = {
  nodes: {
    name: string;
  }[];
};

type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  featuredImage: FeaturedImage;
  terms: Term;
};

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <article key={post.id} className={styles.card}>
      <div className={styles.top}>
        <div className={styles.terms}>
          {post.terms.nodes.map(({ name }, index: any) => (
            <span key={index}>{name} </span>
          ))}
        </div>
        <h2 className={styles.title}>
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h2>
      </div>
      <div className={styles.center}>
        <Link href={`/${post.slug}`}>
          <Image
            alt={post.featuredImage.node.altText}
            src={post.featuredImage.node.sourceUrl}
            fill
          />
        </Link>
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <div className={styles.meta}>
          <span>{post.author.node.name}</span>
          <span>/</span>
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
