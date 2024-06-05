import React, {useMemo, useState} from 'react';
import {RefreshControl, Text, VStack, View} from '@gluestack-ui/themed';
import {INFINITE_GET_USERS_QUERY_KEY, useInfiniteGetUsers} from 'src/api/user';
import queryClient from 'src/api/queryClient';
import {FlashList} from '@shopify/flash-list';
import UserItem from 'src/components/UserItem';
import styles from './HomeScreen.styles';
import {ClipboardDocumentIcon} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteGetUsers();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const flattenData = useMemo(
    () =>
      data?.pages ? data.pages.flatMap(page => [...page.data.results]) : [],
    [data],
  );

  const onRefresh = async () => {
    setIsRefreshing(true);
    queryClient.invalidateQueries({queryKey: [INFINITE_GET_USERS_QUERY_KEY]});
    await refetch();
    setIsRefreshing(false);
  };

  const onEndReached = async () => {
    hasNextPage && !isFetchingNextPage && fetchNextPage();
  };

  return (
    <View bg="#f4f5fa" flex={1}>
      <FlashList
        data={flattenData}
        renderItem={({item}) => <UserItem user={item} />}
        estimatedItemSize={100}
        keyExtractor={item => item.login.uuid}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={isFetching || isLoading}
            onRefresh={() => refetch()}
          />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.75}
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

export default HomeScreen;
