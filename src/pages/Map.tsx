import { FC, useEffect } from "react";
import { ARC_GIS_API_KEY } from "../environments";

import Layout from "../components/Layout";

import Map from "@arcgis/core/Map";
import ViewMap from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";
import esriConfig from "@arcgis/core/config";

const MapPage: FC = () => {
  useEffect(() => {
    esriConfig.apiKey = ARC_GIS_API_KEY;

    const map = new Map({
      basemap: "arcgis/topographic",
    });

    const view = new ViewMap({
      map: map,
      center: [-74.051342, 4.673824],
      zoom: 18,
      container: "viewMap",
    });

    const updateBasemapStyle = (basemapId: any) => {
      view.map.basemap = basemapId;
    };

    if (window.innerWidth >= 1024) {
      let basemapGallery = new BasemapGallery({
        view: view,
      });

      view.ui.add(basemapGallery, {
        position: "bottom-right",
      });
    }

    const basemapStylesDiv = document.getElementById("basemapStyles");
    if (basemapStylesDiv) view.ui.add(basemapStylesDiv, "top-right");

    const styleCombobox = document.getElementById("styleCombobox");
    if (styleCombobox)
      styleCombobox.addEventListener("calciteComboboxChange", (event) => {
        if (event.target) {
          updateBasemapStyle(event.target.value);
        }
      });
  }, []);

  return (
    <Layout>
      <div className="w-4/5 h-4/5" id="viewMap"></div>
      <div id="basemapStyles">
        <calcite-label>Basemap style</calcite-label>
        <calcite-combobox
          id="styleCombobox"
          selection-mode="single"
          clear-disabled
        >
          <calcite-combobox-item
            value="arcgis/navigation"
            text-label="arcgis/navigation"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/navigation-night"
            text-label="arcgis/navigation-night"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/streets"
            text-label="arcgis/streets"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/streets-relief"
            text-label="arcgis/streets-relief"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/streets-night"
            text-label="arcgis/streets-night"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/outdoor"
            text-label="arcgis/outdoor"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/imagery"
            text-label="arcgis/imagery"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/topographic"
            text-label="arcgis/topographic"
            selected
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/terrain"
            text-label="arcgis/terrain"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/oceans"
            text-label="arcgis/oceans"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/light-gray"
            text-label="arcgis/light-gray"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/dark-gray"
            text-label="arcgis/dark-gray"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/human-geography"
            text-label="arcgis/human-geography"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/human-geography-dark"
            text-label="arcgis/human-geography-dark"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/charted-territory"
            text-label="arcgis/charted-territory"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/colored-pencil"
            text-label="arcgis/colored-pencil"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/nova"
            text-label="arcgis/nova"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/modern-antique"
            text-label="arcgis/modern-antique"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/midcentury"
            text-label="arcgis/midcentury"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="arcgis/newspaper"
            text-label="arcgis/newspaper"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/standard"
            text-label="osm/standard"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/standard-relief"
            text-label="osm/standard-relief"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/navigation"
            text-label="osm/navigation"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/navigation-dark"
            text-label="osm/navigation-dark"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/streets"
            text-label="osm/streets"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/hybrid"
            text-label="osm/hybrid"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/light-gray"
            text-label="osm/light-gray"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/dark-gray"
            text-label="osm/dark-gray"
          ></calcite-combobox-item>
          <calcite-combobox-item
            value="osm/blueprint"
            text-label="osm/blueprint"
          ></calcite-combobox-item>
        </calcite-combobox>
      </div>
    </Layout>
  );
};

export default MapPage;
