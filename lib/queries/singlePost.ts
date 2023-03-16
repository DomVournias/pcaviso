export const getPostBySlug = (slug: string) => {
  const getPost = `
  query PostBySlug {
    postBy(slug: "${slug}") {
      id
      content(format: RENDERED)
      title
      date
      terms {
        nodes {
          name
          uri
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
    `;

  return getPost;
};
