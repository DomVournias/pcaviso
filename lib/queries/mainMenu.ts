const MAIN_MENU = `
query Main_Menu {
  menu(id: "dGVybTo0OQ==") {
    id
    name
    menuItems(where: {parentDatabaseId: 0}) {
      nodes {
        label
        id
        path
        parentId
        childItems {
          nodes {
            label
            id
            path
            parentId
            childItems {
              nodes {
                label
                id
                path
                parentId
              }
            }
          }
        }
      }
    }
  }
  }
`;

export default MAIN_MENU;
