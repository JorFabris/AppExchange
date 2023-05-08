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
    title: getText(Enumi18n.ES).tabs.home.name,
    iconDefault: 'grid-outline',
    iconSelected: 'grid',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.HOME_SCREEN,
    screen: HomeScreen,
  },
  {
    title: getText(Enumi18n.ES).tabs.news.name,
    iconDefault: 'newspaper-outline',
    iconSelected: 'newspaper',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.NEWS_SCREEN,
    screen: NewsScreen,
  },
  {
    title: getText(Enumi18n.ES).tabs.favorites.name,
    iconDefault: 'ios-heart-outline',
    iconSelected: 'ios-heart',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.FAVORITES_SCREEN,
    screen: FavoritesScreen,
  },
  {
    title: getText(Enumi18n.ES).tabs.settings.name,
    iconDefault: 'ios-settings-outline',
    iconSelected: 'ios-settings',
    colorSelected: COLORS_DARK.mainColor,
    defaultColor: COLORS_DARK.mainLightColor,
    name: Routes.SETTINGS_SCREEN,
    screen: SettingsScreen,
  },
];

export default Tabs;
