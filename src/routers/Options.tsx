import { Enumi18n } from '../i18n/Interfacei18n';
import { getText } from '../i18n/manageLocales';

import Routes from './Routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import { COLORS_DARK } from '../assets/Colors';
import NewsScreen from '../screens/NewsScreen/NewsScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

const Tabs = [
  {
    title: getText(Enumi18n.EN).tabs.home.name,
    iconDefault: 'grid-outline',
    iconSelected: 'grid',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.HOME_SCREEN,
    screen: HomeScreen,
    key: 'Tab-1',
  },
  {
    title: getText(Enumi18n.EN).tabs.news.name,
    iconDefault: 'newspaper-outline',
    iconSelected: 'newspaper',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.NEWS_SCREEN,
    screen: NewsScreen,
    key: 'Tab-2',
  },
  {
    title: getText(Enumi18n.EN).tabs.settings.name,
    iconDefault: 'ios-settings-outline',
    iconSelected: 'ios-settings',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.SETTINGS_SCREEN,
    screen: SettingsScreen,
    key: 'Tab-3',
  },
];

export default Tabs;
