import * as React from "react";
import { APP_HOME } from "../../navigation/constants";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Header } from "../../shared/header";
import { TopLoader } from "../../components/loader";
import { siteTitle } from "../../components/util";
import { Category } from "./data-view/types";
import { EmptyState } from "../../components/alerts";
import { useAppSelector } from "../../services/broker/broker";
import DataView from "./data-view";

const AddCategory = React.lazy(() => import("./add"));
const EditCategory = React.lazy(() => import("./edit"));
const RemoveCategory = React.lazy(() => import("./remove"));
const ViewCategory = React.lazy(() => import("./view"));

const pages: BreadCrumbProp[] = [{ name: "Categories", href: APP_HOME }];

function MainComponent() {
  const categoryList = useAppSelector((state) => state.categories.value);
  const [showViewCategory, setShowViewCategory] =
    React.useState<boolean>(false);
  const [showAddCategory, setShowAddCategory] = React.useState<boolean>(false);
  const [showEditCategory, setShowEditCategory] =
    React.useState<boolean>(false);
  const [showRemoveCategory, setShowRemoveCategory] =
    React.useState<boolean>(false);

  const [selectedCategories, setSelectedCategories] = React.useState<
    Category[]
  >([]);

  const unselectCategory = React.useCallback(
    (categoryToUnselect: Category) =>
      setSelectedCategories(
        selectedCategories?.filter(
          (selectedCategory: Category) =>
            selectedCategory?.id !== categoryToUnselect?.id
        )
      ),
    [selectedCategories]
  );

  const disableViewButton =
    selectedCategories?.length > 1 || selectedCategories?.length === 0;
  const disableEditButton =
    selectedCategories?.length > 1 || selectedCategories.length === 0;
  const disableRemoveButton = selectedCategories?.length === 0;

  React.useEffect(() => {
    document.title = "Categories | " + siteTitle;
  }, []);

  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Manage Categories" />
        <PageToolBar
          disableViewButton={disableViewButton}
          disableEditButton={disableEditButton}
          disableRemoveButton={disableRemoveButton}
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
          onView={() => {
            setShowViewCategory(true);
          }}
          showActions
        />
      </div>

      <div className="mx-auto mt-6  w-full   max-w-7xl   ">
        {categoryList?.length === 0 ? (
          <>
            <EmptyState
              model="categories"
              canAdd
              onAdd={() => {
                setShowAddCategory(true);
              }}
            />
          </>
        ) : (
          <>
            <DataView
              categories={categoryList}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              unselectCategory={unselectCategory}
            />
          </>
        )}
      </div>
      <React.Suspense fallback={TopLoader()}>
        <AddCategory show={showAddCategory} setShow={setShowAddCategory} />
        <ViewCategory
          show={showViewCategory}
          setShow={setShowViewCategory}
          category={selectedCategories}
        />
        <EditCategory
          show={showEditCategory}
          setShow={setShowEditCategory}
          category={selectedCategories}
        />
        <RemoveCategory
          show={showRemoveCategory}
          setShow={setShowRemoveCategory}
          categories={selectedCategories}
        />
      </React.Suspense>
    </>
  );
}

export default MainComponent;
