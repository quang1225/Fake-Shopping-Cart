import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct, IShop } from '../types/shop.types';
import produce from 'immer';
import { getCategoriesApi, getProductsApi } from 'src/apis/shop';
import { AppState } from '../store';
import { sortValues } from 'src/constants/constants';

export const getCategories = createAsyncThunk(
  'shop/getCategories',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadingCategories(true));
    const data = await getCategoriesApi();
    thunkAPI.dispatch(setLoadingCategories(false));
    return data;
  },
);

export const getProducts = createAsyncThunk(
  'shop/getProducts',
  async (_, thunkAPI) => {
    //@ts-ignored
    const appState: AppState = thunkAPI.getState();
    const { selectedCategory, productPerPage } = appState.shop;

    thunkAPI.dispatch(setLoadingProducts(true));
    const data = await getProductsApi({
      categoryName: selectedCategory,
      limit: productPerPage,
    });
    thunkAPI.dispatch(setLoadingProducts(false));
    return data;
  },
);

const initialState: IShop = {
  cart: [],
  isCartOpen: false,
  products: [],
  categories: [],
  selectedCategory: '',
  isLoadingCategories: false,
  isLoadingProducts: false,
  productPerPage: 0,
  sortBy: sortValues.HIGHEST_RATE,
};

const shopSlide = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ICartItem[]>) =>
      produce(state, draft => {
        draft.cart = action.payload;
      }),
    addToCart: (state, action: PayloadAction<IProduct>) =>
      produce(state, draft => {
        const cartItem = draft.cart.find(
          cartItem => cartItem.product.id === action.payload.id,
        );

        if (cartItem) {
          cartItem.quantity++;
        } else {
          draft.cart.push({ product: action.payload, quantity: 1 });
        }
      }),
    removeFromCart: (state, action: PayloadAction<IProduct>) =>
      produce(state, draft => {
        const cartItem = draft.cart.find(
          cartItem => cartItem.product.id === action.payload.id,
        );

        if (cartItem) {
          if (cartItem.quantity === 1) {
            draft.cart = draft.cart.filter(
              cartItem => cartItem.product.id !== action.payload.id,
            );
          } else {
            cartItem.quantity--;
          }
        }
      }),
    setIsCartOpen: (state, action: PayloadAction<boolean>) =>
      produce(state, draft => {
        draft.isCartOpen = action.payload;
      }),
    setProducts: (state, action: PayloadAction<IProduct[]>) =>
      produce(state, draft => {
        draft.products = action.payload;
      }),
    setLoadingProducts: (state, action: PayloadAction<boolean>) =>
      produce(state, draft => {
        draft.isLoadingProducts = action.payload;
      }),
    setSelectedCategory: (state, action: PayloadAction<string>) =>
      produce(state, draft => {
        draft.selectedCategory = action.payload;
      }),
    setLoadingCategories: (state, action: PayloadAction<boolean>) =>
      produce(state, draft => {
        draft.isLoadingCategories = action.payload;
      }),
    setProductPerPage: (state, action: PayloadAction<number>) =>
      produce(state, draft => {
        draft.productPerPage = action.payload;
      }),
    setSortBy: (state, action: PayloadAction<string>) =>
      produce(state, draft => {
        const sortBy = action.payload;
        draft.sortBy = sortBy;

        draft.products.sort((a, b) => {
          switch (sortBy) {
            case sortValues.LOWEST_PRICE:
              return a.price - b.price;
            case sortValues.HIGHEST_PRICE:
              return b.price - a.price;
            case sortValues.LOWEST_RATE:
              return a.rating.rate - b.rating.rate;
            case sortValues.HIGHEST_RATE:
              return b.rating.rate - a.rating.rate;

            default:
              return 0;
          }
        });
      }),
  },
  extraReducers(builder) {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<string[]>) =>
        produce(state, draft => {
          draft.categories = action.payload;
        }),
    );
    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) =>
        produce(state, draft => {
          draft.products = action.payload;
        }),
    );
  },
});

export const {
  addToCart,
  removeFromCart,
  setIsCartOpen,
  setProducts,
  setCart,
  setLoadingProducts,
  setLoadingCategories,
  setSelectedCategory,
  setProductPerPage,
  setSortBy,
} = shopSlide.actions;

export default shopSlide.reducer;
