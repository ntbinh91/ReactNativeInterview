import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams, ScreenName} from 'src/types/navigation.type';
import BottomTabNavigator from './BottomTabNavigator';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={ScreenName.MainBottomTab}
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
};

export const useMainStackNavigation = () =>
  useNavigation<NativeStackNavigationProp<MainStackParams>>();

export default MainStackNavigator;
