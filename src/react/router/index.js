import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
//user
const UserProfile = React.lazy(() => import("../pages/profile/UserProfile"));

// handle auth and authorization

const routes = [
  // auth and account
  { path: "/login", name: "Login", component: Login, route: Route },
  { path: "/register", name: "Register", component: Register, route: Route },
  { path: "/user", name: "UserProfile", component: UserProfile, route: PrivateRoute },
];

export { routes, PrivateRoute };
