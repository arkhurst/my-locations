import { Wrapper } from "./googleMap";
import Marker from "./marker";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

function MapView({ address, lng, lat }) {
  return (
    <>
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            libraries: ["places", "geometry"],
          }}
          defaultCenter={[]}
          defaultZoom={9}
        >
          <Marker lat={lat} lng={lng} text={address} />
        </GoogleMapReact>
      </Wrapper>
    </>
  );
}

MapView.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};

export { MapView };
