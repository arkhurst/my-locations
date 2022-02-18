import { Coordinates } from "../../pages/locations/data-view/types";

export type CategoryToEditProp = any;
export type LocationToEditProp = any;

export type AddCategoryPayLoad = {
  payload: {
    id: string;
    name: string;
  };
};

export type EditCategoryPayLoad = {
  payload: {
    id: string;
    name: string;
  };
};

export type RemoveCategoryPayLoad = {
  payload: {
    id: string;
  };
};

export type AddLocationPayLoad = {
  payload: {
    id: string;
    name: string;
    category: string;
    coordinates: Coordinates;
    address: string;
  };
};

export type EditLocationPayLoad = {
  payload: {
    id: string;
    name: string;
    category: string;
    coordinates: Coordinates;
    address: string;
  };
};
export type RemoveLocationPayLoad = {
  payload: {
    id: string;
  };
};

export type GetSingleLocationPayLoad = {
  payload: {
    id: number;
  };
};
