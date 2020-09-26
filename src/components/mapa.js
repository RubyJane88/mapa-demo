import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as location from "../data/philippines-map.json";

export default function Mapa() {
  const [viewport, setViewport] = useState({
    latitude: 11.6628272,
    longitude: 118.1258151,
    width: "100vw",
    height: "100vh",
    zoom: 6,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYXJqYXljZWUiLCJhIjoiY2s3ZWV3dXF6MDd3czNubnR0bWQ0MWcxMiJ9.XZjh29usIc4O4xYoyF7GBA"
        }
        mapStyle="mapbox://styles/arjaycee/ckfjkd7zn0rjj19o3ofluhgm9"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          key={location.properties.name}
          latitude={location.geometry.coordinates[1]}
          longitude={location.geometry.coordinates[0]}
        >
          <pre>HERE</pre>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
