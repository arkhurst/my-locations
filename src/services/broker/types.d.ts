export type CategoryToEditProp = any;
export type LocationToEditProp = any;

export type AddCategoryPayLoad = {
  payload: {
    id: number;
    name: string;
  };
};

export type EditCategoryPayLoad = {
  payload: {
    id: number;
    name: string;
  };
};

export type RemoveCategoryPayLoad = {
  payload: {
    id: number;
  };
};
