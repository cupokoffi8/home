import React from "react"; 
import mapStyles from "./mapStyles"; 
import "./Map.css"; 
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api"; 
import { Link } from "react-router-dom";

const API_KEY = "AIzaSyBawcqAK6VVEhjll05YASsIrt9wDoMXppg"; 

const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 40.048370,
  lng: -76.305810
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={16.5}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
          <Marker 
          onClick="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483379,-76.3080947,17z/data=!3m1!4b1!4m5!3m4!1s0x89c62518e5cd1419:0x4c549ed6537c2a4!8m2!3d40.0483338!4d-76.3059007"
            className="markerIcon" 
            position={{
              lat: 40.048370,
              lng: -76.305810
            }}
            icon={{ 
              scaledSize: new window.google.maps.Size(30, 35),
              origin: new window.google.maps.Point(0, 0), 
              anchor: new window.google.maps.Point(20, 20) 
            }}
          /> 
      </GoogleMap>
    </div>
  );
}

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
