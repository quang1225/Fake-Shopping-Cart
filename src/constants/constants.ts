export const routes = {
  HOME: '/',
  PRODUCTS: '/products',
  CONTACT: '/contact',
};

export const PRODUCT_PER_PAGE_OPTIONS = [3, 6, 9];

export const sortValues = {
  LOWEST_PRICE: 'lowestPrice',
  HIGHEST_PRICE: 'highestPrice',
  LOWEST_RATE: 'lowestRate',
  HIGHEST_RATE: 'highestRate',
};

export const headerPopupTypes = {
  MENU: 'menu',
  SEARCH: 'search',
  USER: 'user',
};

export const SORT_OPTIONS = [
  {
    name: 'Lowest Price',
    value: sortValues.LOWEST_PRICE,
  },
  {
    name: 'Highest Price',
    value: sortValues.HIGHEST_PRICE,
  },
  {
    name: 'Lowest Rate',
    value: sortValues.LOWEST_RATE,
  },
  {
    name: 'Highest Rate',
    value: sortValues.HIGHEST_RATE,
  },
];

export const MOBILE_BIG = 768;
export const MOBILE_QUERY = `(max-width:${MOBILE_BIG}px)`;

export const lsNames = {
  USER_CART: 'userCart',
  GUEST_CART: 'guestCart',
  TOKEN: 'demoToken',
};
