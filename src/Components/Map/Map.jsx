import React from "react"; 
import mapStyles from "./mapStyles"; 
import "./Map.css"; 
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api"; 

const API_KEY = "AIzaSyAyoThkfbTBPjfmdZtXVFFF2X3fs7kiWEs"; 

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
  lat: 40.7451,
  lng: -74.0248,
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
        zoom={15}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
          <Marker 
            href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483379,-76.3080947,17z/data=!3m1!4b1!4m5!3m4!1s0x89c62518e5cd1419:0x4c549ed6537c2a4!8m2!3d40.0483338!4d-76.3059007"
            className="markerIcon" 
            position={{
              lat: 40.048370,
              lng: -76.305810
            }}
            icon={{
              url: "https://lh3.googleusercontent.com/pw/ACtC-3eoIMEHvHhFrEnGjWsWYKk4bD8TY09mCUBZzBlb_erlpah5zoL710O_u2u_u5jb9e-S1B-uLXALiSlbR5bVhFO2WpkudlwXZg-74-ZRQYp7OQW5NpPIdTNCccg_pl2iAO8xU9grdN8-iWeohnW8NtJK=w95-h127-no?authuser=2", 
              scaledSize: new window.google.maps.Size(25, 30),
              origin: new window.google.maps.Point(0, 0), 
              anchor: new window.google.maps.Point(20, 20) 
            }}
          />  
      </GoogleMap>
    </div>
  );
}

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
