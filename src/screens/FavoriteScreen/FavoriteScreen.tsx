import React from 'react';
import useAppStore from 'src/stores/useAppStore';
import UserList from 'src/components/UserList';
import styles from './FavoriteScreen.styles';
import {View} from 'react-native';

const FavoriteScreen = () => {
  const {favoriteUsers} = useAppStore();

  return (
    <View style={styles.wrapper}>
      <UserList data={favoriteUsers} />
    </View>
  );
};

export default FavoriteScreen;
