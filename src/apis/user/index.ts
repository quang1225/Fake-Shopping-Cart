import { toast } from 'react-toastify';
import { globalAxios } from 'src/services/globalAxios';
import { ILoginUserApiData, IUserDetailApiData } from './types';

export const getUserDetailApi = async () => {
  try {
    const data = (await globalAxios.get<IUserDetailApiData>('users/1')).data;
    return data;
  } catch (err: any) {
    toast.error('Get user detail fail');
    return {} as IUserDetailApiData;
  }
};

export const loginUserApi = async () => {
  try {
    const data = (
      await globalAxios.post<ILoginUserApiData>('auth/login', {
        username: 'mor_2314',
        password: '83r5^_',
      })
    ).data;
    return data;
  } catch (err: any) {
    toast.error('Login fail');
    return {} as ILoginUserApiData;
  }
};
