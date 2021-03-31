const BASE_URLS = {
  toDo: "/to-dos",
};

export const routes = {
  toDo: {
    routes: {
      viewAll: { name: "View All to dos", route: `${BASE_URLS.toDo}/all` },
    },
  },
};
