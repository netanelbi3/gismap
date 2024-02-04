// NewMap.js

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import React, { useRef, useEffect } from "react";

const NewMap = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new Map({
        basemap: "gray-vector",
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [35.2345, 31.7717],
        zoom: 6,
      });

      const trailheadsLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",
        outFields: ["CITY_NAME", "POP"],
      });

      // Define a popup template for the layer
      const popupTemplate = new PopupTemplate({
        title: "{CITY_NAME}",
        content: "Population: {POP}",
      });

      trailheadsLayer.popupTemplate = popupTemplate;

      webmap.add(trailheadsLayer);

      // Handle click event on the layer to show the popup
      trailheadsLayer.on("click", (event) => {
        const features = event.features;

        if (features.length > 0) {
          const feature = features[0];
          view.popup.open({
            features: [feature],
            location: event.mapPoint,
          });
        }
      });

      return () => {
        view.popup.close();
        view && view.destroy();
      };
    }
  }, []);

  return (
    <div
      className="mapDiv"
      ref={mapDiv}
      style={{ height: "100vh", width: "100%" }}
    ></div>
  );
};

export default NewMap;
