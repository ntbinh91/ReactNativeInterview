import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams, ScreenName} from 'src/types/navigation.type';
import BottomTabNavigator from './BottomTabNavigator';
import {HStack, Image, Pressable} from '@gluestack-ui/themed';
import IMAGES from 'src/constants/images';
import useAppStore from 'src/stores/useAppStore';
import {ArrowLeftStartOnRectangleIcon} from 'react-native-heroicons/solid';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const {setCurrentUser} = useAppStore();

  return (
    <MainStack.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <Pressable
            onPress={() => {
              setCurrentUser(null);
            }}>
            <HStack gap="$1">
              <ArrowLeftStartOnRectangleIcon size={30} color="black" />
            </HStack>
          </Pressable>
        ),
        // eslint-disable-next-line react/no-unstable-nested-components
        headerTitle: () => (
          <Image source={IMAGES.LOGO} width={30} height={30} alt="logo" />
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
