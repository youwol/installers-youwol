import {
    attr$,
    child$,
    Stream$,
    VirtualDOM,
    children$,
} from '@youwol/flux-view'
import * as OsCore from '@youwol/os-core'
import { ExplorerBackend } from '@youwol/http-clients'
import { BehaviorSubject } from 'rxjs'

export class DesktopFavoritesView implements VirtualDOM {
    public readonly class = 'd-flex flex-wrap'
    public readonly children: Stream$<
        ExplorerBackend.GetItemResponse[],
        VirtualDOM
    >

    constructor(params: { [k: string]: unknown }) {
        Object.assign(this, params)
        this.children = children$(
            OsCore.FavoritesFacade.getItems$(),
            (items) => {
                return items.map((item) => {
                    return new DesktopFavoriteView({
                        item,
                    })
                })
            },
        )
    }
}

export class DesktopFavoriteView implements VirtualDOM {
    public readonly class =
        'rounded p-2 d-flex flex-column align-items-center fv-pointer fv-hover-border-focus m-2'
    public readonly baseStyle = {
        width: 'fit-content',
        height: 'fit-content',
    }
    public readonly style: Stream$<boolean, { [k: string]: string }>
    public readonly item: ExplorerBackend.GetItemResponse
    public readonly children: VirtualDOM[]
    public readonly defaultOpeningApp$
    public readonly hovered$ = new BehaviorSubject(false)

    public readonly ondblclick = () => {
        OsCore.tryOpenWithDefault$(this.item).subscribe()
    }

    public readonly onmouseenter = () => {
        this.hovered$.next(true)
    }
    public readonly onmouseleave = () => {
        this.hovered$.next(false)
    }

    constructor(params: { item: ExplorerBackend.GetItemResponse }) {
        Object.assign(this, params)

        this.defaultOpeningApp$ = OsCore.defaultOpeningApp$(this.item)

        this.style = attr$(
            this.hovered$,
            (hovered) => {
                return hovered
                    ? { backgroundColor: 'rgba(0,0,0,0.6)' }
                    : { backgroundColor: 'rgba(0,0,0,0.4)' }
            },
            {
                wrapper: (d) => ({ ...this.baseStyle, ...d }),
            },
        )
        this.children = [
            child$(
                this.defaultOpeningApp$,
                (
                    defaultResp:
                        | { appInfo: OsCore.ApplicationInfo }
                        | undefined,
                ) => {
                    if (!defaultResp) {
                        return { class: 'fas fa-file fa-2x' }
                    }
                    return defaultResp.appInfo.graphics.appIcon
                },
                {
                    untilFirst: {
                        class: 'd-flex align-items-center position-relative',
                        children: [
                            { class: 'fas fa-file fa-2x' },
                            {
                                class: 'fas fa-spinner w-100 fa-spin fv-text-secondary text-center position-absolute',
                            },
                        ],
                    },
                },
            ),
            {
                innerText: this.item.name,
            },
        ]
    }
}
