import React from 'react';
import {FlashList, FlashListProps} from '@shopify/flash-list';
import {User} from 'src/types/user.types';
import UserItem from '../UserItem';
import styles from './UserList.styles';
import Empty from '../Empty';
import {View} from 'react-native';

interface Props extends Omit<FlashListProps<User>, 'renderItem'> {
  data: User[];
}

const UserList = ({data, ...props}: Props) => {
  return (
    <FlashList
      {...props}
      data={data}
      renderItem={({item}) => <UserItem user={item} />}
      estimatedItemSize={100}
      keyExtractor={item => item.login.uuid}
      contentContainerStyle={styles.userListContainer}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListEmptyComponent={() => <Empty />}
    />
  );
};

export default UserList;
