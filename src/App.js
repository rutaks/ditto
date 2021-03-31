import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const PublicRoute = React.lazy(() => import("./routes/PublicRoute"));

const App = () => (
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
        <h1>Finding the meaning of life...</h1>
      </div>
    }
  >
    <Switch>
      <Route path="/to-dos">
        <PublicRoute />
      </Route>
    </Switch>
  </Suspense>
);

export default App;
