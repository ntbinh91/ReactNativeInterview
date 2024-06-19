import React from 'react';
import {StarIcon as StarIconSolid} from 'react-native-heroicons/solid';
import {StarIcon as StarIconOutline} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {User} from 'src/types/user.types';
import useAppStore from 'src/stores/useAppStore';
import themeConfig from 'src/constants/themes';
import styles from './UserItem.styles';
import {Image, View, Text, TouchableOpacity} from 'react-native';

interface Props {
  user: User;
}

const UserItem = ({user}: Props) => {
  const {favoriteUsers, setFavoriteUsers} = useAppStore();

  const toggleFavorite = () => {
    if (favoriteUsers.find(favUser => favUser.login.uuid === user.login.uuid)) {
      setFavoriteUsers(
        favoriteUsers.filter(favUser => favUser.login.uuid !== user.login.uuid),
      );
    } else {
      setFavoriteUsers([...favoriteUsers, user]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image
          source={{uri: user.picture.thumbnail}}
          alt="avatar"
          style={styles.avatar}
        />
        <View style={styles.infoWrapper}>
          <Text style={styles.username}>
            {user.name.first} {user.name.last}
          </Text>
          <View style={styles.addressWrapper}>
            <MapPinIcon size={13} color="gray" />
            <Text style={styles.address}>
              {user.location.city}, {user.location.country}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleFavorite}>
          {favoriteUsers.find(
            favUser => favUser.login.uuid === user.login.uuid,
          ) ? (
            <StarIconSolid size={28} color={themeConfig.colors.primary} />
          ) : (
            <StarIconOutline size={28} color={themeConfig.colors.primary} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserItem;
