import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import useAppStore from './stores/useAppStore';
import queryClient from './api/queryClient';
import {QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

const App = () => {
  const {currentUser} = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {currentUser ? <MainStackNavigator /> : <AuthStackNavigator />}
        <Toast position="bottom" bottomOffset={40} />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
