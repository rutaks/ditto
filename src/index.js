import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NODE_ENV } from "./utils/constants";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {console.log(NODE_ENV)}
    <QueryClientProvider client={queryClient}>
      {NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
