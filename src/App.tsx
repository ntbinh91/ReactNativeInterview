import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import MainStackNavigator from './navigation/MainStackNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import useAppStore from './stores/useAppStore';
import {config} from '@gluestack-ui/config';

const App = () => {
  const {currentUser} = useAppStore();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        {currentUser ? <MainStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
