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
        {
            name: "treasuremap/js/islands",
            exclude: ["common"]
        },
        {
            name: "treasuremap/js/map",
            exclude: ["common"]
        }
    ],
    paths: {
        "jquery": "empty:",
        "knockout": "empty:"
    },
    optimizeCss: "standard"
}
