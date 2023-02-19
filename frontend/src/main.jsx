import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QueryClientProvider store={client}> */}
    <Router>
      {/* <UserContextProvider> */}
      <App />
      {/* </UserContextProvider> */}
    </Router>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
