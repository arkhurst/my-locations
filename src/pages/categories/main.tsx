import { APP_HOME } from "../../navigation/constants";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Header } from "../../shared/header";
import DataView from "./data-view";

const pages: BreadCrumbProp[] = [{ name: "Categories", href: APP_HOME }];

const categories = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: "2",
    name: "Perferendis pariatur, quaerat",
  },
  {
    id: "4",
    name: "Ipsam perspiciatis doloremque",
  },

  {
    id: "3",
    name: "Exercitationem maiores",
  },
];

function MainComponent() {
  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Manage Categories" />
        <PageToolBar pages={pages} />
      </div>

      <div className="mx-auto mt-6  w-full   max-w-7xl   ">
        <DataView categories={categories} />
      </div>
    </>
  );
}

export default MainComponent;
