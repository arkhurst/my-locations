import * as React from "react";
import { Route } from "react-router-dom";
import { TopLoader } from "../../components/loader";
import { routes } from "../../navigation";
import { RouteProp } from "../../navigation/types";
import { BottomNav } from "../bottom-nav";

const MainLayout: React.FC = () => {
  return (
    <>
      {/* pages */}
      <div className="mb-20 min-h-screen bg-white  ">
        <React.Suspense fallback={TopLoader()}>
          {routes.map((route: RouteProp, i: number) => {
            return (
              <React.Fragment key={i}>
                <Route
                  path={route.path}
                  component={route.component as any}
                  exact={route.exact}
                />
              </React.Fragment>
            );
          })}
        </React.Suspense>
      </div>

      {/* bottom nav */}
      <BottomNav />
    </>
  );
};

export default MainLayout;
