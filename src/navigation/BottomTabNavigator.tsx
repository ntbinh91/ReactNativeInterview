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
import {useToken} from '@gluestack-ui/themed';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const activeColor = useToken('colors', 'rose600');

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={ScreenName.Home}
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <HomeIcoSolid color={color} />
            ) : (
              <HomeIconOutline color={color} />
            ),
          title: 'Home',
          tabBarActiveTintColor: activeColor,
          tabBarAllowFontScaling: false,
        }}
      />
      <BottomTab.Screen
        name={ScreenName.Favorite}
        component={FavoriteScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <StarIconSolid color={color} />
            ) : (
              <StarIconOutline color={color} />
            ),
          title: 'Favorite',
          tabBarActiveTintColor: activeColor,
          tabBarAllowFontScaling: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
