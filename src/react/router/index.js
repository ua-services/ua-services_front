import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));

// handle auth and authorization

const routes = [
  // auth and account
  { path: "/login", name: "Login", component: Login, route: Route },

];

export { routes, PrivateRoute };
