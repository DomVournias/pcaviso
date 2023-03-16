export const LATEST_POSTS = `
query LatestPosts {
    posts(where: {orderby: {field: DATE, order: DESC}}, first: 7) {
      edges {
        node {
          id
          slug
          title
          date
          excerpt
          terms {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`;
