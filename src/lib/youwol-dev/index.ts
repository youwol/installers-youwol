import { Installer } from '@youwol/os-core'
import * as fluxInstaller from '@youwol/installers-flux'
import * as storiesInstaller from '@youwol/installers-stories'
import { install as basicInstall } from '../basic'

export async function install(installer: Installer): Promise<Installer> {
    return installer.with({
        fromInstallingFunctions: [
            basicInstall,
            fluxInstaller.basics.install,
            storiesInstaller.basic.install,
        ],
    })
}
