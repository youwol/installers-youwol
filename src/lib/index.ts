import { DesktopFavoritesView } from './basic'

export * as youwolDev from './youwol-dev'
export * as basic from './basic'

export function widgets() {
    return [new DesktopFavoritesView()]
}
