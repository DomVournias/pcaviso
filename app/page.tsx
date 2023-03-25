import { Inter } from "next/font/google";
import styles from "./Home.module.scss";
import getData from "@/lib/functions/getData";
import { LATEST_POSTS } from "@/lib/queries/homePosts";
import PostCard from "./components/Cards/PostCard";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { posts } = await getData(LATEST_POSTS);

  const latestPosts = posts.edges;

  console.log(posts);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>
          <div className={styles.articles}>
            {latestPosts.map((post: any, index: any) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>
        </section>
        <Sidebar />
      </div>
    </div>
  );
}
