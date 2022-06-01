import { Installer } from '@youwol/os-core'
import { ExplorerBackend } from '@youwol/http-clients'
import { uploadFile$ } from './asset-specific/upload-data'
import { AssetLightDescription } from '@youwol/os-core/src/lib/environment'
import { PackageInfoView } from './asset-specific'
export * from './asset-specific'
export * from './desktop'

export async function install(installer: Installer): Promise<Installer> {
    return installer.with({
        fromManifests: [
            {
                id: '@youwol/installers-youwol.basic',
                applications: [
                    '@youwol/explorer',
                    '@youwol/cdn-explorer',
                ].concat(
                    location.hostname === 'localhost' ||
                        location.hostname === '127.0.0.1'
                        ? ['@youwol/developer-portal']
                        : [],
                ),
                assetPreviews: ({
                    asset,
                }: {
                    asset: AssetLightDescription
                }) => {
                    return [
                        {
                            icon: 'fas fa-info',
                            name: 'Package info',
                            exe: () => {
                                return new PackageInfoView({ asset })
                            },
                            applicable: () => {
                                return asset.kind == 'package'
                            },
                        },
                    ]
                },
                contextMenuActions: ({ node, explorer }) => {
                    return [
                        {
                            name: 'Import data',
                            icon: 'fas fa-file-import',
                            authorized: true,
                            exe: async () => {
                                const input = document.createElement('input')
                                input.setAttribute('type', 'file')
                                input.setAttribute('multiple', 'true')
                                input.dispatchEvent(new MouseEvent('click'))
                                input.onchange = () => {
                                    Array.from(input.files).forEach((file) => {
                                        const status = uploadFile$(node, file)
                                        explorer.newAsset({
                                            parentNode: node,
                                            pendingName: file.name,
                                            response$: status.response$,
                                            progress$: status.progress$,
                                        })
                                    })
                                    input.remove()
                                }
                            },
                            applicable: () =>
                                ExplorerBackend.isInstanceOfFolderResponse(
                                    node,
                                ),
                        },
                    ]
                },
            },
        ],
    })
}
