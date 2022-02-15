import { APP_HOME } from "../../navigation/constants";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Header } from "../../shared/header";
import DataView from "./data-view";

const pages: BreadCrumbProp[] = [{ name: "Categories", href: APP_HOME }];

function MainComponent() {
  return (
    <>
      <div className="sticky top-0 ">
        <Header />
        <PageToolBar pages={pages} />
      </div>

      <div className="mx-auto mt-8  w-full   max-w-7xl   ">
        <DataView />
      </div>
    </>
  );
}

export default MainComponent;
