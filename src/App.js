import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const PublicRoute = React.lazy(() => import("./routes/PublicRoute"));

const App = () => (
  <Suspense fallback={<div>Finding the meaning of life...</div>}>
    <Switch>
      <Route path="/to-dos">
        <PublicRoute />
      </Route>
    </Switch>
  </Suspense>
);

export default App;
