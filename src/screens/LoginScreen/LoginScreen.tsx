import {Button, ButtonText, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import useAppStore from 'src/stores/useAppStore';

const LoginScreen = () => {
  const {setCurrentUser} = useAppStore();

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        onPress={() => {
          setCurrentUser({
            accessToken: 'xx',
            userProfile: {
              id: 1,
              name: 'test',
              email: 'aaa@a.com',
            },
          });
        }}>
        <ButtonText>Log in</ButtonText>
      </Button>
    </View>
  );
};

export default LoginScreen;
