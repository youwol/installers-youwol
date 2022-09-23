
const runTimeDependencies = {
    "externals": {
        "@youwol/installers-stories": "^0.1.2",
        "@youwol/installers-flux": "^0.1.2",
        "@youwol/os-core": "^0.1.2",
        "@youwol/http-clients": "^1.0.2",
        "rxjs": "^6.5.5",
        "@youwol/flux-view": "^1.0.3",
        "@youwol/cdn-client": "^1.0.2",
        "@youwol/fv-input": "^0.2.1"
    },
    "includedInBundle": {}
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

// eslint-disable-next-line @typescript-eslint/ban-types -- allow to allow no secondary entries
const mainEntry : Object = {
    "entryFile": "./lib/index.ts",
    "loadDependencies": [
        "@youwol/installers-stories",
        "@youwol/installers-flux",
        "@youwol/os-core",
        "@youwol/http-clients",
        "rxjs",
        "@youwol/flux-view",
        "@youwol/cdn-client",
        "@youwol/fv-input"
    ]
}

// eslint-disable-next-line @typescript-eslint/ban-types -- allow to allow no secondary entries
const secondaryEntries : Object = {}
const entries = {
     '@youwol/installers-youwol': './lib/index.ts',
    ...Object.values(secondaryEntries).reduce( (acc,e) => ({...acc, [`@youwol/installers-youwol/${e.name}`]:e.entryFile}), {})
}
export const setup = {
    name:'@youwol/installers-youwol',
        assetId:'QHlvdXdvbC9pbnN0YWxsZXJzLXlvdXdvbA==',
    version:'0.1.3',
    shortDescription:"Collections of standards installers for youwol",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/installers-youwol',
    npmPackage:'https://www.npmjs.com/package/@youwol/installers-youwol',
    sourceGithub:'https://github.com/youwol/installers-youwol',
    userGuide:'https://l.youwol.com/doc/@youwol/installers-youwol',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    entries,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    },

    installMainModule: ({cdnClient, installParameters}:{cdnClient, installParameters?}) => {
        const parameters = installParameters || {}
        const scripts = parameters.scripts || []
        const modules = [
            ...(parameters.modules || []),
            ...mainEntry['loadDependencies'].map( d => `${d}#${runTimeDependencies.externals[d]}`)
        ]
        return cdnClient.install({
            ...parameters,
            modules,
            scripts,
        }).then(() => {
            return window[`@youwol/installers-youwol_APIv01`]
        })
    },
    installAuxiliaryModule: ({name, cdnClient, installParameters}:{name: string, cdnClient, installParameters?}) => {
        const entry = secondaryEntries[name]
        const parameters = installParameters || {}
        const scripts = [
            ...(parameters.scripts || []),
            `@youwol/installers-youwol#0.1.3~dist/@youwol/installers-youwol/${entry.name}.js`
        ]
        const modules = [
            ...(parameters.modules || []),
            ...entry.loadDependencies.map( d => `${d}#${runTimeDependencies.externals[d]}`)
        ]
        if(!entry){
            throw Error(`Can not find the secondary entry '${name}'. Referenced in template.py?`)
        }
        return cdnClient.install({
            ...parameters,
            modules,
            scripts,
        }).then(() => {
            return window[`@youwol/installers-youwol/${entry.name}_APIv01`]
        })
    }
}
