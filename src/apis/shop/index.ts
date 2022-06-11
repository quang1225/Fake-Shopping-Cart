import { toast } from 'react-toastify';
import { globalAxios } from 'src/services/globalAxios';
import { IProductsApiData, IGetProductsApiProps } from './types';

export const getCategoriesApi = async () => {
  try {
    const data = (await globalAxios.get<string[]>('products/categories')).data;
    return data;
  } catch (err: any) {
    toast.error('Get categories fail');
    return [];
  }
};

export const getProductsApi = async ({
  categoryName = '',
  limit = 0,
}: IGetProductsApiProps) => {
  try {
    const data = (
      await globalAxios.get<IProductsApiData[]>(
        `products${
          categoryName ? `/category/${categoryName}` : ''
        }?limit=${limit}`,
      )
    ).data;
    return data;
  } catch (err: any) {
    toast.error('Get products fail');
    return [];
  }
};
