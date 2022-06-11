import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  headerPopupTypes,
  lsNames,
  MOBILE_QUERY,
  routes,
} from '../../constants/constants';
import { useAppDispatch, useAppSelector } from 'src/state/store';
import { setCart, setIsCartOpen } from 'src/state/slices/shopSlice';
import {
  HeaderWrapper,
  Container,
  Logo,
  Navbar,
  NavbarLink,
  AnimatedButton,
  Quantity,
  UserButton,
  CustomPopover,
  MenuMobileContent,
} from './styles';
import {
  getUserDetail,
  setIsUserMenuOpen,
  setToken,
} from 'src/state/slices/userSlice';
import UserPopContent from './UserPopContent';
import SearchPopContent from './SearchPopContent';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const { cart } = useAppSelector(appState => appState.shop);
  const { token, isUserMenuOpen, detail } = useAppSelector(
    appState => appState.user,
  );
  const dispatch = useAppDispatch();
  const [popupType, setPopupType] = useState('');
  const [initTokenDone, setInitTokenDone] = useState(false);
  const [popupMinWidth, setPopupMinWidth] = useState(300);
  let menuButtonRef = useRef(null);
  let searchButtonRef = useRef(null);
  let userButtonRef = useRef(null);
  let popupEl = useRef(null);
  const isMobile = useMediaQuery(MOBILE_QUERY);

  const sumCartQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };

  const getCartLocal = () => {
    try {
      const cartLsName = token ? lsNames.USER_CART : lsNames.GUEST_CART;
      const cartLsData = localStorage.getItem(cartLsName);
      const cartData = cartLsData ? JSON.parse(cartLsData) : [];
      dispatch(setCart(cartData));
    } catch (error) {
      dispatch(setCart([]));
    }
  };

  const saveCartLocal = () => {
    const cartStr = JSON.stringify(cart);
    const cartLsName = token ? lsNames.USER_CART : lsNames.GUEST_CART;
    localStorage.setItem(cartLsName, cartStr);
  };

  const hidePopUser = () => {
    dispatch(setIsUserMenuOpen(false));
  };

  const showPopUser = () => {
    dispatch(setIsUserMenuOpen(true));
  };

  const clickMenuMobileButton = async () => {
    await setPopupType(headerPopupTypes.MENU);
    showPopUser();
  };

  const clickSearchButton = async () => {
    await setPopupType(headerPopupTypes.SEARCH);
    showPopUser();
  };

  const clickUserButton = async () => {
    await setPopupType(headerPopupTypes.USER);
    showPopUser();
  };

  const onClickMenuLink = () => {
    hidePopUser();
  };

  useEffect(() => {
    saveCartLocal();
  }, [cart]);

  const initData = async () => {
    const lsToken = localStorage.getItem(lsNames.TOKEN) || '';

    await dispatch(setToken(lsToken));
    setInitTokenDone(true);
    dispatch(getUserDetail());
  };

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    if (!initTokenDone) return;

    getCartLocal();
  }, [token, initTokenDone]);

  useEffect(() => {
    switch (popupType) {
      case headerPopupTypes.MENU:
        popupEl.current = menuButtonRef.current;
        setPopupMinWidth(200);
        break;
      case headerPopupTypes.SEARCH:
        popupEl.current = searchButtonRef.current;
        setPopupMinWidth(340);
        break;
      case headerPopupTypes.USER:
        popupEl.current = userButtonRef.current;
        setPopupMinWidth(300);
        break;

      default:
        break;
    }
  }, [popupType]);

  const menuLinks = (
    <>
      <NavbarLink to={routes.HOME} onClick={onClickMenuLink}>
        Home
      </NavbarLink>
      <NavbarLink to={routes.PRODUCTS} onClick={onClickMenuLink}>
        Products
      </NavbarLink>
      <NavbarLink to={routes.CONTACT} onClick={onClickMenuLink}>
        Contact
      </NavbarLink>
    </>
  );

  return (
    <HeaderWrapper>
      <Container>
        <Link to={routes.HOME}>
          <Logo>FakeStore</Logo>
        </Link>
        <Navbar>
          {!isMobile && menuLinks}

          {isMobile && (
            <AnimatedButton onClick={clickMenuMobileButton} ref={menuButtonRef}>
              <AiOutlineMenu />
            </AnimatedButton>
          )}

          <AnimatedButton onClick={clickSearchButton} ref={searchButtonRef}>
            <GoSearch />
          </AnimatedButton>
          <AnimatedButton onClick={() => dispatch(setIsCartOpen(true))}>
            <FaShoppingCart />
            {sumCartQuantity() > 0 ? (
              <Quantity>{sumCartQuantity()}</Quantity>
            ) : (
              ''
            )}
          </AnimatedButton>
          <UserButton onClick={clickUserButton} ref={userButtonRef}>
            {detail.id && detail.name.firstname[0] + detail.name.lastname[0]}
            {!detail.id && <FaUserAlt />}
          </UserButton>
        </Navbar>
      </Container>

      <CustomPopover
        open={isUserMenuOpen}
        anchorEl={popupEl.current}
        PaperProps={{
          style: {
            minWidth: popupMinWidth,
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={hidePopUser}
        disableRestoreFocus
        keepMounted
      >
        {popupType === headerPopupTypes.MENU && (
          <MenuMobileContent>{menuLinks}</MenuMobileContent>
        )}
        {popupType === headerPopupTypes.SEARCH && <SearchPopContent />}
        {popupType === headerPopupTypes.USER && <UserPopContent />}
      </CustomPopover>
    </HeaderWrapper>
  );
};

export default Header;
