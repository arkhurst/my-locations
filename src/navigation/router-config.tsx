import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopLoader } from "../components/loader";
import { APP_HOME, NOT_FOUND } from "./constants";

const Layout = React.lazy(() => import("../shared/layout"));
const HandleNotFound = React.lazy(() => import("../pages/404"));

const RouterConfig: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={TopLoader()}>
          <Switch>
            {/* handle 404s */}
            <Route exact={true} component={HandleNotFound} path={NOT_FOUND} />
            <Route component={Layout} path={APP_HOME} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default RouterConfig;
