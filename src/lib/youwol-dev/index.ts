import { Core } from '@youwol/platform-essentials'
import * as fluxInstaller from '@youwol/installers-flux'
import * as storiesInstaller from '@youwol/installers-stories'
import { install as basicInstall } from '../basic'

export async function install(
    installer: Core.Installer,
): Promise<Core.Installer> {
    return installer.with({
        fromInstallingFunctions: [
            basicInstall,
            fluxInstaller.basics.install,
            storiesInstaller.basic.install,
        ],
    })
}
