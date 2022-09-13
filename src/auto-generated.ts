
const runTimeDependencies = {
    "load": {
        "@youwol/installers-stories": "^0.1.0",
        "@youwol/installers-flux": "^0.1.0",
        "@youwol/os-core": "^0.1.0",
        "@youwol/http-clients": "^1.0.1",
        "rxjs": "^6.5.5",
        "@youwol/flux-view": "^1.0.0",
        "@youwol/cdn-client": "^1.0.1",
        "@youwol/fv-input": "^0.2.0"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/installers-stories": "@youwol/installers-stories_APIv01",
    "@youwol/installers-flux": "@youwol/installers-flux_APIv01",
    "@youwol/os-core": "@youwol/os-core_APIv01",
    "@youwol/http-clients": "@youwol/http-clients_APIv1",
    "rxjs": "rxjs_APIv6",
    "@youwol/flux-view": "@youwol/flux-view_APIv1",
    "@youwol/cdn-client": "@youwol/cdn-client_APIv1",
    "@youwol/fv-input": "@youwol/fv-input_APIv02",
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    }
}
export const setup = {
    name:'@youwol/installers-youwol',
    assetId:'QHlvdXdvbC9pbnN0YWxsZXJzLXlvdXdvbA==',
    version:'0.1.0',
    shortDescription:"Collections of standards installers for youwol",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/installers-youwol',
    npmPackage:'https://www.npmjs.com/package/@youwol/installers-youwol',
    sourceGithub:'https://github.com/youwol/installers-youwol',
    userGuide:'https://l.youwol.com/doc/@youwol/installers-youwol',
    apiVersion:'01',
    runTimeDependencies,
    externals
}
