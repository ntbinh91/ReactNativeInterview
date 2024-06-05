import ApiEndpoint from './ApiEndpoint';
import {QueryFunctionContext, useInfiniteQuery} from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import {GetUsersParams, GetUsersResponse} from 'src/types/user.types';

const DEFAULT_PAGE_SIZE = 10;
const MAX_REQUESTED_PAGE = 5;

export const INFINITE_GET_USERS_QUERY_KEY = 'infiniteGetUsers';

const getUsers = async ({pageParam}: QueryFunctionContext) => {
  const {page, results} = pageParam as GetUsersParams;
  return await axiosInstance.get<GetUsersParams, GetUsersResponse>(
    ApiEndpoint.Users,
    {
      params: {
        results: results || DEFAULT_PAGE_SIZE,
        page: page || 1,
      },
    },
  );
};

export const useInfiniteGetUsers = () => {
  return useInfiniteQuery<GetUsersResponse>({
    queryKey: [INFINITE_GET_USERS_QUERY_KEY],
    queryFn: getUsers,
    initialPageParam: {
      page: 1,
    },
    getNextPageParam: ({data}) => {
      if (data.info.page >= MAX_REQUESTED_PAGE) {
        return null;
      }

      return {
        results: data.info.results,
        page: data.info.page + 1,
      };
    },
  });
};
