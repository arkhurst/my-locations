import { createSlice } from "@reduxjs/toolkit";
import { LocationData } from "../../data/locations";
import {
  LocationToEditProp,
  AddLocationPayLoad,
  EditLocationPayLoad,
  RemoveLocationPayLoad,
  GetSingleLocationPayLoad,
} from "./types";

const locationToEdit: LocationToEditProp = {};

export const locationSlice = createSlice({
  name: "locations",
  initialState: {
    value: LocationData,
    selectedValue: locationToEdit,
  },
  reducers: {
    addLocation: (state, action: AddLocationPayLoad) => {
      state.value.push(action.payload);
    },
    removeLocation: (state, action: RemoveLocationPayLoad) => {
      state.value = state.value.filter(
        (location) => location.id !== action.payload.id
      );
    },
    getSingleLocation: (state, action) => {
      state.selectedValue = state.value.find(
        (location) => location.id === action.payload.id
      );
    },
    editLocation: (state, action: EditLocationPayLoad) => {
      state.value.forEach((location) => {
        if (location.id === action.payload.id) {
          location.name = action.payload.name;
          location.address = action.payload.address;
          location.category = action.payload.category;
          location.coordinates.latitude = action.payload.coordinates.latitude;
          location.coordinates.longitude = action.payload.coordinates.longitude;
        }
      });
    },
  },
});

export const { addLocation, removeLocation, getSingleLocation, editLocation } =
  locationSlice.actions;
export default locationSlice.reducer;
