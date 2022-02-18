import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopLoader } from "../components/loader";
import { APP_HOME } from "./constants";

const Layout = React.lazy(() => import("../shared/layout"));

const RouterConfig: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={TopLoader()}>
          <Switch>
            <Route component={Layout} path={APP_HOME} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default RouterConfig;
