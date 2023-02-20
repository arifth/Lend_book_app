import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
