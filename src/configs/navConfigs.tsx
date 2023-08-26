import SvgIconStyle from '../components/SvgIconStyle'
import { PATH_APP } from '../routes/paths'

const getIcon = (name: string) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />

const ICONS = {
    home: getIcon('ic_home'),
    settings: getIcon('ic_settings'),
}

export const NAV_CONFIGS = [
    {
        title: 'home',
        path: PATH_APP.home,
        icon: ICONS.home,
    },
    {
        title: 'settings',
        path: PATH_APP.settings,
        icon: ICONS.settings,
    },
]
