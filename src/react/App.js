import React, { Suspense } from "react";
import { routes } from "../react/router";
import { BrowserRouter } from "react-router-dom";
import Loadable from "react-loadable";

import "../../src/assets/scss/index.scss"

import { isUserAuthenticated } from "../helpers/authUtils";


const loading = () => <div/>;

const NonAuthLayout = Loadable({
  loader: () => import("./components/UserLayout"),
  render(loaded, props) {
    const LoadedComponent = loaded.default;

    return <LoadedComponent {...props} />;
  },
  loading
});

const AuthLayout = Loadable({
  loader: () => import("./components/UserLayout"),
  render(loaded, props) {
    const LoadedComponent = loaded.default;

    return <LoadedComponent {...props} />;
  },
  loading
});


function App() {
  const getLayout = () => {
    return isUserAuthenticated() ? AuthLayout : NonAuthLayout;
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        {routes.map((route, index) => {
          return (
            <route.route
              key={index}
              path={route.path}
              exact={route.exact}
              roles={route.roles}
              component={props => {
                const Layout = getLayout();

                return (
                  <Suspense fallback={loading()}>
                    <Layout {...props} title={route.title}>
                      <route.component {...props} />
                    </Layout>
                  </Suspense>
                );
              }}
            />
          );
        })}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
