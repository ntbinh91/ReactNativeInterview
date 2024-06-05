import axios from 'axios';
import useAppStore from 'src/stores/useAppStore';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api', // TODO: move to .env file
});

axiosInstance.interceptors.request.use((config: any) => {
  const currentUser = useAppStore.getState().currentUser;

  if (currentUser) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: currentUser.accessToken,
      },
    };
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    if (error.response) {
      if (error.response.status === 401) {
        const setCurrentUser = useAppStore.getState().setCurrentUser;
        setCurrentUser(null);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
