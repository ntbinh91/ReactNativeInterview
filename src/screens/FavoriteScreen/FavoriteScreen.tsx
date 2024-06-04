import {Button, ButtonText, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import {useMainStackNavigation} from 'src/navigation/MainStackNavigator';
import {ScreenName} from 'src/types/navigation.type';

const FavoriteScreen = () => {
  const {navigate} = useMainStackNavigation();
  return (
    <View>
      <Text>FavoriteScreen</Text>

      <Button onPress={() => navigate(ScreenName.Home)}>
        <ButtonText>Go to Home Screen</ButtonText>
      </Button>
    </View>
  );
};

export default FavoriteScreen;
