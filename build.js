{
  appDir: "./djmodjs/assets/",
  baseUrl: ".",
  mainConfigFile: "./djmodjs/assets/common.js",
  dir: "./djmodjs/assets-built",
  modules: [
    {
      name: "common"
    },
    {
      name: "shared/js/utils",
      exclude: ["common"]
    },

    // Every one of your js modules needs to be listed here. These are two
    // from the original example skeleton. ie: islands is 'islands.js' and
    // 'map' is map.js in the 'djmodjs/assets/js/treasuremap/js/' directory.
    //
    // {
    //     name: "treasuremap/js/islands",
    //     exclude: ["common"]
    // },
    // {
    //     name: "treasuremap/js/map",
    //     exclude: ["common"]
    // }
  ],
  paths: {
    "jquery": "empty:",
    "knockout": "empty:"
  },
  optimizeCss: "standard"
}
