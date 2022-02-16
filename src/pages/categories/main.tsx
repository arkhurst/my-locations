import * as React from "react";
import { APP_HOME } from "../../navigation/constants";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Header } from "../../shared/header";
import { TopLoader } from "../../components/loader";
import { siteTitle } from "../../components/util";
import DataView from "./data-view";

const AddCategory = React.lazy(() => import("./add"));
const EditCategory = React.lazy(() => import("./edit"));
const RemoveCategory = React.lazy(() => import("./remove"));
const pages: BreadCrumbProp[] = [{ name: "Categories", href: APP_HOME }];

const categories = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: 2,
    name: "Perferendis pariatur, quaerat",
  },
  {
    id: 4,
    name: "Ipsam perspiciatis doloremque",
  },

  {
    id: 3,
    name: "Exercitationem maiores",
  },
];

function MainComponent() {
  const [showAddCategory, setShowAddCategory] = React.useState<boolean>(false);
  const [showEditCategory, setShowEditCategory] =
    React.useState<boolean>(false);
  const [showRemoveCategory, setShowRemoveCategory] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    document.title = "Categories | " + siteTitle;
  }, []);

  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Manage Categories" />
        <PageToolBar
          pages={pages}
          onAdd={() => {
            setShowAddCategory(true);
          }}
          onEdit={() => {
            setShowEditCategory(true);
          }}
          onRemove={() => {
            setShowRemoveCategory(true);
          }}
          showActions
        />
      </div>

      <div className="mx-auto mt-6  w-full   max-w-7xl   ">
        <DataView categories={categories} />
      </div>
      <React.Suspense fallback={TopLoader()}>
        <AddCategory show={showAddCategory} setShow={setShowAddCategory} />
        <EditCategory show={showEditCategory} setShow={setShowEditCategory} />
        <RemoveCategory
          show={showRemoveCategory}
          setShow={setShowRemoveCategory}
        />
      </React.Suspense>
    </>
  );
}

export default MainComponent;
