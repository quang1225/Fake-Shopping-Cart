import { IProduct } from 'src/state/types/shop.types';

// maybe different between API and Store data
export type IProductsApiData = IProduct;

export interface IGetProductsApiProps {
  limit?: number;
  categoryName?: string;
}
