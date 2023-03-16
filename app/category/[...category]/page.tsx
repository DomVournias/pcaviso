import styles from "./page.module.scss";
import getDynamicData from "@/lib/functions/getDynamicData";
import categoryPosts from "@/lib/queries/categoryPosts";
import PostCard from "@/app/components/Cards/PostCard";
import formatPageTitle from "@/lib/utils/formatPageTitle";

const SingleCategory = async ({ params: { category } }: string | any) => {
  let currentCategory = category[category.length - 1];
  const { data } = await getDynamicData(categoryPosts(currentCategory));

  const posts = data.posts.nodes;

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {posts.length === 0 ? (
          <div className={styles.no_posts}>
            The are no posts in this category yet.
          </div>
        ) : (
          <>
            <div className={styles.page_title}>
              {formatPageTitle(currentCategory)}
            </div>
            <div className={styles.cards}>
              {posts.map((post: any, index: any) => (
                <PostCard post={post} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleCategory;
