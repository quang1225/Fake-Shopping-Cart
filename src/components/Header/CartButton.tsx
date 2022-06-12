import { FaShoppingCart } from 'react-icons/fa';
import { setIsCartOpen } from 'src/state/slices/shopSlice';
import { useAppDispatch, useAppSelector } from 'src/state/store';
import { AnimatedButton, Quantity } from './styles';

const CartButton = () => {
  const { cart } = useAppSelector(appState => appState.shop);
  const dispatch = useAppDispatch();

  const sumCartQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };

  return (
    <AnimatedButton onClick={() => dispatch(setIsCartOpen(true))}>
      <FaShoppingCart />
      {sumCartQuantity() > 0 ? <Quantity>{sumCartQuantity()}</Quantity> : ''}
    </AnimatedButton>
  );
};

export default CartButton;
