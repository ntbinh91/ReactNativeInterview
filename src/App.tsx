import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import MainStackNavigator from './navigation/MainStackNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import useAppStore from './stores/useAppStore';
import {config} from '@gluestack-ui/config';
import queryClient from './api/queryClient';
import {QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const {currentUser} = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          {currentUser ? <MainStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
};

export default App;
