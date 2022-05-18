import { Core } from '@youwol/platform-essentials'

export async function install(
    installer: Core.Installer,
): Promise<Core.Installer> {
    return installer.with({
        fromManifests: [
            {
                id: '@youwol/installers-youwol.basic',
                applications: ['@youwol/explorer'],
            },
        ],
    })
}
