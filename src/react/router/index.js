import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

// main page
const MainPage = React.lazy(() => import("../pages/dashboard/MainPage"));
// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
// user
const UserProfile = React.lazy(() => import("../pages/profile/UserProfile"));
// agency
const MyAgency = React.lazy(() => import("../pages/agency/MyAgency"));
const EditAgency = React.lazy(() => import("../pages/agency/EditAgency"));

// handle auth and authorization

const routes = [
  // main page
  { path: "/dashboard", name: "MainPage", component: MainPage, route: Route },
  // auth and account
  { path: "/login", name: "Login", component: Login, route: Route },
  { path: "/register", name: "Register", component: Register, route: Route },
  // user
  { path: "/user", name: "UserProfile", component: UserProfile, route: PrivateRoute },
  // agency
  { path: "/my-agency", name: "MyAgency", component: MyAgency, route: PrivateRoute },
  { path: "/edit-agency", name: "EditAgency", component: EditAgency, route: PrivateRoute },
  // default route
  { path: "/", exact: true, component: () => <Redirect to="/dashboard"/>, route: Route },
];

export { routes, PrivateRoute };
