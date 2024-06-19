import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/HomeScreen';
import {
  HomeIcon as HomeIcoSolid,
  StarIcon as StarIconSolid,
} from 'react-native-heroicons/solid';
import {
  HomeIcon as HomeIconOutline,
  StarIcon as StarIconOutline,
} from 'react-native-heroicons/outline';
import FavoriteScreen from 'src/screens/FavoriteScreen';
import {ScreenName} from 'src/types/navigation.type';
import themeConfig from 'src/constants/themes';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={ScreenName.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <HomeIcoSolid color={color} />
            ) : (
              <HomeIconOutline color={color} />
            ),
          title: 'Home',
          tabBarActiveTintColor: themeConfig.colors.primary,
          tabBarAllowFontScaling: false,
        }}
      />
      <BottomTab.Screen
        name={ScreenName.Favorite}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <StarIconSolid color={color} />
            ) : (
              <StarIconOutline color={color} />
            ),
          title: 'Favorite',
          tabBarActiveTintColor: themeConfig.colors.primary,
          tabBarAllowFontScaling: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
