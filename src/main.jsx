import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminAuthContextProvider } from "./contexts/AdminAuthContext";
import App from "./App";
import "./index.css";
import ScrollToTop from "./components/user/ScrollToTop";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <App />
        </QueryClientProvider>
      </AdminAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
