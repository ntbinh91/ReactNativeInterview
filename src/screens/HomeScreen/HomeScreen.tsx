import React from 'react';
import {useMainStackNavigation} from 'src/navigation/MainStackNavigator';
import {Button, ButtonText, Text, View} from '@gluestack-ui/themed';
import useAppStore from 'src/stores/useAppStore';
import {ScreenName} from 'src/types/navigation.type';

const HomeScreen = () => {
  const {navigate} = useMainStackNavigation();
  const {setCurrentUser} = useAppStore();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigate(ScreenName.Favorite)}>
        <ButtonText>Go to Favorite Screen</ButtonText>
      </Button>

      <Button
        onPress={() => {
          setCurrentUser(null);
        }}>
        <ButtonText>Log out</ButtonText>
      </Button>
    </View>
  );
};

export default HomeScreen;
