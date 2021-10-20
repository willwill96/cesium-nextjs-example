const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/Workers'
              ),
              to: '../public/Cesium/Workers',
            },
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/ThirdParty'
              ),
              to: '../public/Cesium/ThirdParty',
            },
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/Assets'
              ),
              to: '../public/Cesium/Assets',
            },
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/Widgets'
              ),
              to: '../public/Cesium/Widgets',
            },
          ],
        })
      )
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('/Cesium'),
      })
    )
    config.resolve.exportsFields = []
    // return {...config, resolve: {...config.resolve, exportsFields:[]}}
    return config
  },
}
