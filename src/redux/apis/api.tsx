import { create } from 'apisauce';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../../../.env.json';

const api = create({
  baseURL: env.BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data'
  },
});
export const setAuthToken = async (token: string) => {

  try {
    await AsyncStorage.setItem('@accessToken', token);
    api.setHeader('token', token);
  } catch (e) {
  }
};

api.axiosInstance.interceptors.request.use(
  async (config: any) => {
    const value = await AsyncStorage.getItem('@accessToken');
    if (value != null) {
      config.headers.Authorization = `Bearer ${value}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default api;
