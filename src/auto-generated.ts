
const runTimeDependencies = {
    "load": {
        "@youwol/installers-stories": "^0.1.1",
        "@youwol/installers-flux": "^0.1.1",
        "@youwol/os-core": "^0.1.1",
        "@youwol/http-clients": "^1.0.2",
        "rxjs": "^6.5.5",
        "@youwol/flux-view": "^1.0.3",
        "@youwol/cdn-client": "^1.0.2",
        "@youwol/fv-input": "^0.2.1"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/installers-stories": {
        "commonjs": "@youwol/installers-stories",
        "commonjs2": "@youwol/installers-stories",
        "root": "@youwol/installers-stories_APIv01"
    },
    "@youwol/installers-flux": {
        "commonjs": "@youwol/installers-flux",
        "commonjs2": "@youwol/installers-flux",
        "root": "@youwol/installers-flux_APIv01"
    },
    "@youwol/os-core": {
        "commonjs": "@youwol/os-core",
        "commonjs2": "@youwol/os-core",
        "root": "@youwol/os-core_APIv01"
    },
    "@youwol/http-clients": {
        "commonjs": "@youwol/http-clients",
        "commonjs2": "@youwol/http-clients",
        "root": "@youwol/http-clients_APIv1"
    },
    "rxjs": {
        "commonjs": "rxjs",
        "commonjs2": "rxjs",
        "root": "rxjs_APIv6"
    },
    "@youwol/flux-view": {
        "commonjs": "@youwol/flux-view",
        "commonjs2": "@youwol/flux-view",
        "root": "@youwol/flux-view_APIv1"
    },
    "@youwol/cdn-client": {
        "commonjs": "@youwol/cdn-client",
        "commonjs2": "@youwol/cdn-client",
        "root": "@youwol/cdn-client_APIv1"
    },
    "@youwol/fv-input": {
        "commonjs": "@youwol/fv-input",
        "commonjs2": "@youwol/fv-input",
        "root": "@youwol/fv-input_APIv02"
    },
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    }
}
const exportedSymbols = {
    "@youwol/installers-stories": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/installers-stories"
    },
    "@youwol/installers-flux": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/installers-flux"
    },
    "@youwol/os-core": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/os-core"
    },
    "@youwol/http-clients": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/http-clients"
    },
    "rxjs": {
        "apiKey": "6",
        "exportedSymbol": "rxjs"
    },
    "@youwol/flux-view": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/flux-view"
    },
    "@youwol/cdn-client": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/cdn-client"
    },
    "@youwol/fv-input": {
        "apiKey": "02",
        "exportedSymbol": "@youwol/fv-input"
    }
}
export const setup = {
    name:'@youwol/installers-youwol',
        assetId:'QHlvdXdvbC9pbnN0YWxsZXJzLXlvdXdvbA==',
    version:'0.1.2',
    shortDescription:"Collections of standards installers for youwol",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/installers-youwol',
    npmPackage:'https://www.npmjs.com/package/@youwol/installers-youwol',
    sourceGithub:'https://github.com/youwol/installers-youwol',
    userGuide:'https://l.youwol.com/doc/@youwol/installers-youwol',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    }
}
