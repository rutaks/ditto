const BASE_URLS = {
  toDo: "/to-dos",
};

export const routes = {
  toDo: {
    routes: {
      viewAll: { name: "View All to dos", route: `${BASE_URLS.toDo}/all` },
      create: { name: "Create todo", route: `${BASE_URLS.toDo}/create` },
      modify: { name: "Modify todo", route: `${BASE_URLS.toDo}/:id/update` },
    },
  },
};
