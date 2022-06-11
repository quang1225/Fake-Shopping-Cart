export interface IShop {
  cart: ICartItem[];
  isCartOpen: boolean;
  products: IProduct[];
  categories: string[];
  selectedCategory: string;
  isLoadingCategories: boolean;
  isLoadingProducts: boolean;
  productPerPage: number;
  sortBy: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
