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

// // const circle = 
// viewer.entities.add({
//   position: Cesium.Cartesian3.fromDegrees(-111.0, 40.0, 150000.0),
//   ellipse: {
//     semiMajorAxis: 300000,
//     semiMinorAxis: 300000,
//     height: 200000,
//     material: Cesium.Color.GREEN,
//   }
// });

// // const redEllipse = 
// viewer.entities.add({
//   position: Cesium.Cartesian3.fromDegrees(-103, 40),
//   ellipse: {
//     semiMajorAxis: 400000,
//     semiMinorAxis: 250000,
//     material: Cesium.Color.RED.withAlpha(0.6),
//   }
// });

// const blueEllipse = viewer.entities.add({
//   position: Cesium.Cartesian3.fromDegrees(-95.0, 40.0, 100000.0),
//   name: "Blue translucent, rotated, and extruded ellipse with outline",
//   ellipse: {
//     semiMinorAxis: 150000.0,
//     semiMajorAxis: 300000.0,
//     extrudedHeight: 200000.0,
//     rotation: Cesium.Math.toRadians(45),
//     material: Cesium.Color.BLUE.withAlpha(0.5),
//     outline: true,
//   },
// });

// const redWall = 
viewer.entities.add({
  name: "Red wall at height",
  wall: {
    positions: Cesium.Cartesian3.fromDegreesArrayHeights([
      -115.0,
      44.0,
      200000.0,
      -90.0,
      44.0,
      200000.0,
    ]),
    minimumHeights: [100000.0, 100000.0],
    material: Cesium.Color.RED,
  },
});

// const greenWall = 
viewer.entities.add({
  name: "Green wall from surface with outline",
  wall: {
    positions: Cesium.Cartesian3.fromDegreesArrayHeights([
      -107.0,
      43.0,
      100000.0,
      -97.0,
      43.0,
      100000.0,
      -97.0,
      40.0,
      100000.0,
      -107.0,
      40.0,
      100000.0,
      -107.0,
      43.0,
      100000.0,
    ]),
    material: Cesium.Color.GREEN,
    outline: true,
  },
});

// const blueWall = 
viewer.entities.add({
  name: "Blue wall with sawtooth heights and outline",
  wall: {
    positions: Cesium.Cartesian3.fromDegreesArray([
      -115.0,
      50.0,
      -112.5,
      50.0,
      -110.0,
      50.0,
      -107.5,
      50.0,
      -105.0,
      50.0,
      -102.5,
      50.0,
      -100.0,
      50.0,
      -97.5,
      50.0,
      -95.0,
      50.0,
      -92.5,
      50.0,
      -90.0,
      50.0,
    ]),
    maximumHeights: [
      100000,
      200000,
      100000,
      200000,
      100000,
      200000,
      100000,
      200000,
      100000,
      200000,
      100000,
    ],
    minimumHeights: [
      0,
      100000,
      0,
      100000,
      0,
      100000,
      0,
      100000,
      0,
      100000,
      0,
    ],
    material: Cesium.Color.BLUE.withAlpha(0.5),
    outline: true,
    outlineColor: Cesium.Color.BLACK,
  },
});

viewer.flyTo(viewer.entities);
