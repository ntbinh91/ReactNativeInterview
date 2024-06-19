import React, {useMemo, useState} from 'react';
import {INFINITE_GET_USERS_QUERY_KEY, useInfiniteGetUsers} from 'src/api/user';
import queryClient from 'src/api/queryClient';
import UserList from 'src/components/UserList';
import styles from './HomeScreen.styles';
import {RefreshControl, View} from 'react-native';
import themeConfig from 'src/constants/themes';

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
    <View style={styles.wrapper}>
      <UserList
        data={flattenData}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={isFetching || isLoading}
            onRefresh={() => refetch()}
            tintColor={themeConfig.colors.primary}
          />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.75}
      />
    </View>
  );
};

export default HomeScreen;
