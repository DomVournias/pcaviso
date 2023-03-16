const SearchPosts = (term: string) => {
  const SearchPostsByTerm = `
     query PostsByCategory {
        posts(where: {search: "${term}"}, first: 5) {
            edges {
              node {
                id
                title
              }
            }
          }
    }
     `;
  return SearchPostsByTerm;
};

export default SearchPosts;
