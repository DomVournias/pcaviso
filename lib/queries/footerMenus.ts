export const MAIN = `
query Main_Menu {
  menu(id: "dGVybTo0OQ==") {
    id
    name
    menuItems(where: {parentDatabaseId: 0}) {
      nodes {
        label
        id
        path
        }
      }
    }
  }
`;

export const CATEGORIES = `
query Secondary_Menu {
  categories(
    where: {hideEmpty: true, hierarchical: true, order: DESC, orderby: COUNT}
  ) {
    nodes {
      id
      uri
      name
    }
  }
}
`;
