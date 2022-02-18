export interface CardComponentProp {
  location: Location;
  isLocationSelected?: Location;
  selectedLocations: Array<Location>;
  setSelectedLocations: React.Dispatch<React.SetStateAction<Array<Location>>>;
  unselectLocation: (locationToUnselect: Location) => void;
}

export interface MainComponentProp {
  locations: Array<Location>;
  selectedLocations: Array<Location>;
  setSelectedLocations: React.Dispatch<React.SetStateAction<Array<Location>>>;
  unselectLocation: (locationToUnselect: Location) => void;
}

export type Location = {
  name: string;
  id: string;
  address: string;
  coordinates: Coordinates;
  category: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};
