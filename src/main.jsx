import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/PublicRoutes/PublicRoutes";
import FetchContext from "./contexts/FetchContext";
import AuthContext from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthContext><FetchContext>
    <RouterProvider router={Router}></RouterProvider>
    </FetchContext></AuthContext>
    
  </React.StrictMode>
);
