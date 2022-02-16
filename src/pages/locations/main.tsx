import { LOCATIONS } from "../../navigation/constants";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";

const pages: BreadCrumbProp[] = [{ name: "Locations", href: LOCATIONS }];

function MainComponent() {
  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Manage Locations" />
        <PageToolBar pages={pages} />
      </div>
      <div>hello from locations</div>
    </>
  );
}

export default MainComponent;
