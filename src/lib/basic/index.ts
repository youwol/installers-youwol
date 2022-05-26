import { Installer } from '@youwol/os-core'
export * from './asset-specific'

export async function install(installer: Installer): Promise<Installer> {
    return installer.with({
        fromManifests: [
            {
                id: '@youwol/installers-youwol.basic',
                applications: ['@youwol/explorer'],
            },
        ],
    })
}
