import {
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  View,
  useToken,
} from '@gluestack-ui/themed';
import React from 'react';
import {StarIcon as StarIconSolid} from 'react-native-heroicons/solid';
import {StarIcon as StarIconOutline} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {User} from 'src/types/user.types';
import useAppStore from 'src/stores/useAppStore';

interface Props {
  user: User;
}

const UserItem = ({user}: Props) => {
  const activeColor = useToken('colors', 'rose600');
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
    <View paddingRight="$5" paddingLeft={50}>
      <HStack
        bg="white"
        borderRadius="$xl"
        p="$5"
        pl={42}
        position="relative"
        minHeight={80}>
        <Image
          source={{uri: user.picture.thumbnail}}
          rounded="$full"
          borderColor="white"
          borderWidth={2}
          position="absolute"
          width={60}
          height={60}
          left={-30}
          top={12}
          alt="avatar"
        />
        <VStack gap="$1" flex={1}>
          <Text fontSize="$lg" fontWeight="bold">
            {user.name.first} {user.name.last}
          </Text>
          <HStack alignItems="center" gap="$1">
            <MapPinIcon size={13} color="gray" />
            <Text fontSize="$sm" color="$trueGray400">
              {user.location.city}, {user.location.country}
            </Text>
          </HStack>
        </VStack>
        <Pressable onPress={toggleFavorite}>
          {favoriteUsers.find(
            favUser => favUser.login.uuid === user.login.uuid,
          ) ? (
            <StarIconSolid size={28} color={activeColor} />
          ) : (
            <StarIconOutline size={28} color={activeColor} />
          )}
        </Pressable>
      </HStack>
    </View>
  );
};

export default UserItem;
