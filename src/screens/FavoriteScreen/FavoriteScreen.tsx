import React from 'react';
import {Text, VStack, View} from '@gluestack-ui/themed';
import {FlashList} from '@shopify/flash-list';
import UserItem from 'src/components/UserItem';
import styles from './FavoriteScreen.styles';
import useAppStore from 'src/stores/useAppStore';
import {ClipboardDocumentIcon} from 'react-native-heroicons/outline';

const FavoriteScreen = () => {
  const {favoriteUsers} = useAppStore();

  return (
    <View bg="#f4f5fa" flex={1}>
      <FlashList
        data={favoriteUsers}
        renderItem={({item}) => <UserItem user={item} />}
        estimatedItemSize={100}
        keyExtractor={item => item.login.uuid}
        contentContainerStyle={styles.userListContainer}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View height={12} />}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListEmptyComponent={() => (
          <VStack mt="$12" alignItems="center" gap="$3">
            <ClipboardDocumentIcon size={50} color="gray" />
            <Text color="$trueGray400">No data</Text>
          </VStack>
        )}
      />
    </View>
  );
};

export default FavoriteScreen;
