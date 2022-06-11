import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserDetail } from '../types/user.types';
import produce from 'immer';
import { getUserDetailApi, loginUserApi } from 'src/apis/user';
import { lsNames } from 'src/constants/constants';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setIsLoadingUser(true));
    const data = await loginUserApi();
    thunkAPI.dispatch(setToken(data.token));

    const detailData = await getUserDetailApi();
    thunkAPI.dispatch(setUserDetail(detailData));
    thunkAPI.dispatch(setIsLoadingUser(false));
  },
);

export const getUserDetail = createAsyncThunk(
  'user/getUserDetail',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setIsLoadingUser(true));
    const data = await getUserDetailApi();
    thunkAPI.dispatch(setIsLoadingUser(false));
    thunkAPI.dispatch(setUserDetail(data));
  },
);

const initialState: IUser = {
  detail: {} as IUserDetail,
  isUserMenuOpen: false,
  isLoadingUser: false,
  token: '',
};

const userSlide = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserDetail: (state, action: PayloadAction<IUserDetail>) =>
      produce(state, draft => {
        const detail = action.payload;
        draft.detail = detail;
      }),
    setIsUserMenuOpen: (state, action: PayloadAction<boolean>) =>
      produce(state, draft => {
        draft.isUserMenuOpen = action.payload;
      }),
    setIsLoadingUser: (state, action: PayloadAction<boolean>) =>
      produce(state, draft => {
        draft.isLoadingUser = action.payload;
      }),
    setToken: (state, action: PayloadAction<string>) =>
      produce(state, draft => {
        draft.token = action.payload;
        localStorage.setItem(lsNames.TOKEN, action.payload);
      }),
    logoutUser: () => {
      localStorage.removeItem(lsNames.GUEST_CART);
      localStorage.removeItem(lsNames.TOKEN);

      return {
        ...initialState,
      };
    },
  },
});

export const {
  setUserDetail,
  setIsUserMenuOpen,
  setIsLoadingUser,
  logoutUser,
  setToken,
} = userSlide.actions;

export default userSlide.reducer;
