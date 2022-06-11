import { CircularProgress, debounce } from '@mui/material';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsApi } from 'src/apis/shop';
import CommonField from 'src/components/elements/CommonField';
import { IProduct } from 'src/state/types/shop.types';
import { CustomPopover, TypeaheadContent, Wrapper } from './styles';
const SearchPopContent = () => {
  const [showTypeahead, setShowTypeahead] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showedProducts, setShowedProducts] = useState<IProduct[]>();

  const debounceSearch = useCallback(
    debounce((text: string) => onSearch(text), 500),
    [],
  );

  const onEnter = () => {};

  const onSearch = async (text: string) => {
    if (text) {
      showPopTypeahead();
    } else {
      return;
    }

    setLoading(true);
    const products = await getProductsApi({ limit: 5 });
    setShowedProducts(products.filter(x => x.title));
    setLoading(false);
  };

  const onChangeSearch = (value: string) => {
    setSearchText(value);
    debounceSearch(value);
  };

  const hidePopTypeahead = () => {
    setShowTypeahead(false);
  };

  const showPopTypeahead = () => {
    setShowTypeahead(true);
  };

  return (
    <Wrapper>
      <CommonField
        value={searchText}
        onChange={onChangeSearch}
        label="Search products"
        placeholder="Type and press Enter to search"
        onEnter={onEnter}
        width="100%"
      />

      <CustomPopover
        open={showTypeahead}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={hidePopTypeahead}
        disableRestoreFocus
      >
        <TypeaheadContent>
          {loading && <CircularProgress size={32} />}
          {!loading && (
            <>
              <div className="scroll-wrap">
                <ul className="products">
                  {showedProducts?.map(item => (
                    <Link key={item.id} to={`/products/${item.id}`}>
                      <div className="left-side">
                        <img src={item.image} width="28" height="28" />
                        <div className="name">{item.title}</div>
                      </div>
                      <div className="right-side">${item.price}</div>
                    </Link>
                  ))}
                </ul>
              </div>

              {!loading && searchText && (
                <div className="title search-text">
                  Press Enter to search all items
                </div>
              )}
            </>
          )}
        </TypeaheadContent>
      </CustomPopover>
    </Wrapper>
  );
};

export default SearchPopContent;
