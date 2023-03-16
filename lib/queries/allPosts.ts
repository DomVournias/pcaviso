const ALL_POSTS = `
  query GetAllPosts {
    posts {
      nodes {
        id
        slug
      }
    }
  }
`;

export default ALL_POSTS;
