import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hello App</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
