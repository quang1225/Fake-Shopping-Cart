import { IUserDetail } from 'src/state/types/user.types';

// maybe different between API and Store data
export type IUserDetailApiData = IUserDetail;

export interface ILoginUserApiData {
  token: string;
}

export interface IGetUserDetailApiProps {
  limit?: number;
  categoryName?: string;
}
