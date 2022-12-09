import './style.css'
// The URL on your server where CesiumJS's static files are hosted.
(window as any).CESIUM_BASE_URL = '/';

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token from your ion account

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OGUzYmRhYi03OTE1LTRlMDMtOTY3MC05MzQ1MjYyYmFjZmMiLCJpZCI6MTY3NjcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzExNzIzMjd9.TfSst4yaqIPtdhroq5ZpCj-F1BJiYt24TAqgvhgHai8';

// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});

// const buildingsTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

// const circle = 
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-111.0, 40.0, 150000.0),
  ellipse: {
    semiMajorAxis: 300000,
    semiMinorAxis: 300000,
    height: 200000,
    material: Cesium.Color.GREEN,
  }
});

// const redEllipse = 
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-103, 40),
  ellipse: {
    semiMajorAxis: 400000,
    semiMinorAxis: 250000,
    material: Cesium.Color.RED.withAlpha(0.6),
  }
});

const blueEllipse = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-95.0, 40.0, 100000.0),
  name: "Blue translucent, rotated, and extruded ellipse with outline",
  ellipse: {
    semiMinorAxis: 150000.0,
    semiMajorAxis: 300000.0,
    extrudedHeight: 200000.0,
    rotation: Cesium.Math.toRadians(45),
    material: Cesium.Color.BLUE.withAlpha(0.5),
    outline: true,
  },
});

viewer.flyTo(blueEllipse);
