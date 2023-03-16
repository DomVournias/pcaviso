"use client";

import { useState, useEffect, use } from "react";
import getData from "@/lib/functions/getData";
import SearchPosts from "@/lib/queries/search";
import React from "react";
import styles from "./SearchModal.module.scss";
import Link from "next/link";

type Post = {
  node: {
    id: string;
    title: string;
  };
};

type SearchResults = {
  posts: {
    edges: Post[];
  };
};

export default function SearchModal() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults>({
    posts: { edges: [] },
  });
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (search !== "") {
      setLoading(true);
      timeout = setTimeout(() => {
        getSearchResults();
      }, 500);
    } else {
      setSearchResults({ posts: { edges: [] } });
      setLoading(false);
      setShowResults(false);
    }
    return () => clearTimeout(timeout);
  }, [search]);

  async function getSearchResults() {
    try {
      const data = await getData(SearchPosts(search));
      setSearchResults(data);
      setLoading(false);
      setShowResults(true);
    } catch (error) {
      console.log(error);
    }
  }

  const posts = searchResults?.posts?.edges;

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search"
            autoFocus
            onChange={(event) => setSearch(event.target.value)}
          />
          {showResults && (
            <div className={styles.results}>
              {loading && <p>Loading...</p>}
              {!loading && posts.length === 0 && <p>No posts found</p>}
              {!loading && posts.length > 0 && (
                <ul className={styles.posts}>
                  {posts.map((post) => (
                    <li className={styles.post} key={post.node.id}>
                      <Link href="/">{post.node.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
