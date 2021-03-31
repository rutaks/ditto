import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar, Container } from "../../components";
import { routes } from "../../config/routing.config";

const { routes: toDoRoutes } = routes.toDo;

const ViewToDos = React.lazy(() => import("../../views/ViewToDos"));

const PublicRoute = () => (
  <Fragment>
    <NavBar />
    <Suspense
      fallback={
        <div
          style={{
            margin: "auto",
            width: "50%",
            paddingTop: "10%",
            textAlign: "center",
          }}
        >
          <h1>Generating killer bots...</h1>
        </div>
      }
    >
      <Container>
        <Switch>
          <Route exact path={toDoRoutes.viewAll.route}>
            <ViewToDos />
          </Route>
        </Switch>
      </Container>
    </Suspense>
  </Fragment>
);

export default PublicRoute;
