export interface CardComponentProp {
  location: Location;
}

export interface MainComponentProp {
  locations: Array<Location>;
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
