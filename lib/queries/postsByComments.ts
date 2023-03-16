const getPostsByComments = (postCount: Number) => {
  const PostsByComments = `
     query PostsByCategory {
        posts(where: {orderby: {field: COMMENT_COUNT, order: DESC}}, first: ${postCount}) {
            edges {
              node {
                id
                title
                slug
                date
                commentCount
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    
                  }
                }
              }
            }
          }
        }
     `;
  return PostsByComments;
};

export default getPostsByComments;
