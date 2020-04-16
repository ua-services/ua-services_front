import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
// user
const UserProfile = React.lazy(() => import("../pages/profile/UserProfile"));
// agency
const MyAgency = React.lazy(() => import("../pages/agency/MyAgency"));

// handle auth and authorization

const routes = [
  // auth and account
  { path: "/login", name: "Login", component: Login, route: Route },
  { path: "/register", name: "Register", component: Register, route: Route },
  // user
  { path: "/user", name: "UserProfile", component: UserProfile, route: PrivateRoute },
  // agency
  { path: "/my-agency", name: "MyAgency", component: MyAgency, route: PrivateRoute },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/user"/>,
    route: PrivateRoute
  },
];

export { routes, PrivateRoute };
