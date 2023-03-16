const getPostsByCategory = (category: string) => {
  const PostsByCategory = `
   query PostsByCategory {
      posts (where: {categoryName: "${category}"}){
        nodes {
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
   `;
  return PostsByCategory;
};

export default getPostsByCategory;
