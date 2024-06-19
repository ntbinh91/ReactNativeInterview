import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams, ScreenName} from 'src/types/navigation.type';
import BottomTabNavigator from './BottomTabNavigator';
import IMAGES from 'src/constants/images';
import useAppStore from 'src/stores/useAppStore';
import {ArrowLeftStartOnRectangleIcon} from 'react-native-heroicons/solid';
import {Image, Pressable, StyleSheet} from 'react-native';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const {setCurrentUser} = useAppStore();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerRight: () => (
          <Pressable
            onPress={() => {
              setCurrentUser(null);
            }}>
            <ArrowLeftStartOnRectangleIcon size={30} color="black" />
          </Pressable>
        ),
        headerTitle: () => (
          <Image source={IMAGES.LOGO} style={styles.logo} alt="logo" />
        ),
        headerTitleAlign: 'center',
      }}>
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

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
});
