import { createWorldTerrain, Viewer } from 'cesium'
import { useEffect } from 'react'
export default () => {
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer', {
      terrainProvider: createWorldTerrain(),
    })
  }, [])
  return <div id="cesiumContainer" />
}
