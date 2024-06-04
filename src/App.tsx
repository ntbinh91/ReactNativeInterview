import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StarIcon, StopCircleIcon} from 'react-native-heroicons/outline';
import Toast from 'react-native-simple-toast';
import {
  GluestackUIProvider,
  Text,
  SafeAreaView,
  View,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <SafeAreaView>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Text>Hello App</Text>
            <StarIcon color="red" />
            <StopCircleIcon color="red" />
          </View>

          <Button
            onPress={() => {
              Toast.show('This is a toast message.', Toast.SHORT);
            }}>
            <ButtonText>Hello World</ButtonText>
          </Button>
        </SafeAreaView>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
