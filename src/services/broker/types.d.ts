import { Coordinates } from "../../pages/locations/data-view/types";

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

export type AddLocationPayLoad = {
  payload: {
    id: number;
    name: string;
    category: string;
    coordinates: Coordinates;
    address: string;
  };
};

export type EditLocationPayLoad = {
  payload: {
    id: number;
    name: string;
    category: string;
    coordinates: Coordinates;
    address: string;
  };
};
export type RemoveLocationPayLoad = {
  payload: {
    id: number;
  };
};

export type GetSingleLocationPayLoad = {
  payload: {
    id: number;
  };
};
