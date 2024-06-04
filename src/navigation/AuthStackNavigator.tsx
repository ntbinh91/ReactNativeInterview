import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import LoginScreen from 'src/screens/LoginScreen';
import {AuthStackParams, ScreenName} from 'src/types/navigation.type';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenName.Login}>
      <AuthStack.Screen name={ScreenName.Login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
