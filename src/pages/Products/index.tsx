import { useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from 'src/state/store';
import {
  getCategories,
  getProducts,
  setProductPerPage,
  setSelectedCategory,
  setSortBy,
} from 'src/state/slices/shopSlice';
import {
  Filter,
  ProductsWrapper,
  Loading,
  Categories,
  FilterWrap,
  CategoriesMobile,
} from './styles';
import { SORT_OPTIONS } from 'src/constants/constants';
import CommonSelect from 'src/components/elements/CommonSelect';
import { StyledMenuItem } from 'src/components/elements/CommonSelect/styles';
import { CircularProgress, debounce } from '@mui/material';
import CommonField from 'src/components/elements/CommonField';

const Products = () => {
  const {
    products,
    categories,
    productPerPage,
    sortBy,
    isLoadingProducts,
    selectedCategory,
  } = useAppSelector(appState => appState.shop);
  const dispatch = useAppDispatch();

  const getProductsDebounce = useCallback(
    debounce(() => dispatch(getProducts()), 300),
    [],
  );

  const productCards = products.map(product => (
    <ProductCard key={uuidv4()} product={product} />
  ));

  const perPageChange = (value: string) => {
    dispatch(setProductPerPage(+value));
  };

  const sortChange = (value: string) => {
    dispatch(setSortBy(value));
  };

  const clickCategory = (cateName: string) => {
    dispatch(setSelectedCategory(cateName));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    getProductsDebounce();
  }, [productPerPage, selectedCategory]);

  return (
    <>
      <FilterWrap>
        <Categories>
          <li
            onClick={() => clickCategory('')}
            className={selectedCategory === '' ? 'active' : ''}
          >
            All
          </li>
          {categories.map(cateName => (
            <li
              key={`button_categories_${cateName}`}
              onClick={() => clickCategory(cateName)}
              className={selectedCategory === cateName ? 'active' : ''}
            >
              {cateName}
            </li>
          ))}
        </Categories>

        <CategoriesMobile>
          <CommonSelect
            value={selectedCategory}
            label="Categories"
            onChange={value => clickCategory(value)}
          >
            <StyledMenuItem value={''}>All</StyledMenuItem>
            {categories.map(cateName => (
              <StyledMenuItem
                key={`select_categories_${cateName}`}
                value={cateName}
                style={{ textTransform: 'uppercase' }}
              >
                {cateName}
              </StyledMenuItem>
            ))}
          </CommonSelect>
        </CategoriesMobile>

        <Filter>
          <CommonField
            label="API Limit"
            value={productPerPage + ''}
            onChange={perPageChange}
            width="10rem"
          />

          {/* <CommonSelect
          value={productPerPage + ''}
          label="API Limit"
          width={160}
          onChange={perPageChange}
        >
          {PRODUCT_PER_PAGE_OPTIONS.map(x => (
            <StyledMenuItem key={`product_per_page_${x}`} value={x}>
              {x}
            </StyledMenuItem>
          ))}
        </CommonSelect> */}

          <CommonSelect
            value={sortBy}
            label="Sort by"
            width="19rem"
            onChange={sortChange}
          >
            {SORT_OPTIONS.map(x => (
              <StyledMenuItem key={`product_per_page_${x}`} value={x.value}>
                {x.name}
              </StyledMenuItem>
            ))}
          </CommonSelect>
        </Filter>
      </FilterWrap>

      {isLoadingProducts ? (
        <Loading>
          <CircularProgress size={50} />
        </Loading>
      ) : (
        <ProductsWrapper>{productCards}</ProductsWrapper>
      )}
    </>
  );
};

export default Products;
