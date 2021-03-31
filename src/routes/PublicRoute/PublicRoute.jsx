import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../config/routing.config";

const { routes: toDoRoutes } = routes.toDo;

const ViewToDos = React.lazy(() => import("../../views/ViewToDos"));

const PublicRoute = () => (
  <Fragment>
    <Suspense fallback={<div>Generating killer bots...</div>}>
      <Switch>
        <Route exact path={toDoRoutes.viewAll.route}>
          <ViewToDos />
        </Route>
      </Switch>
    </Suspense>
  </Fragment>
);

export default PublicRoute;
