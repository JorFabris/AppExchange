import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './Options';
import { Text } from 'react-native';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import { COLORS_DARK } from '../assets/Colors';

const Tab = createBottomTabNavigator();

function TabRouter() {
  return (
    <Tab.Navigator>
      {Tabs.map(cTabs => {
        return (
          <Tab.Screen
            name={cTabs.name}
            component={cTabs.screen}
            options={{
              tabBarInactiveBackgroundColor: COLORS_DARK.screenColor,
              tabBarActiveBackgroundColor: COLORS_DARK.screenColor,
              tabBarIcon: ({ color, focused, size }) => (
                <Icon
                  name={focused ? cTabs.iconSelected : cTabs.iconDefault}
                  color={focused ? cTabs.colorSelected : cTabs.defaultColor}
                  size={size}
                />
              ),
              tabBarLabel: () => (
                <Text
                  style={{
                    fontFamily: Fonts.REGULAR,
                    fontSize: FontSize.fontTabHome,
                    color: COLORS_DARK.textColor,
                  }}>
                  {cTabs.title}
                </Text>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
export default TabRouter;
