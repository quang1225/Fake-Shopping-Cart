import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import CardItemCard from './CartItemCard';
import { useAppSelector } from 'src/state/store';
import { setIsCartOpen } from 'src/state/slices/shopSlice';
import { CartWrapper, Title, Products, Total, Overlay } from './styles';
import CommonButton from '../elements/CommonButton';

const Cart = () => {
  const { cart, isCartOpen } = useAppSelector(appState => appState.shop);
  const dispatch = useDispatch();

  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
        0,
      )
      .toFixed(2);
  };

  const cartItems = cart.map(cartItem => (
    <CardItemCard key={uuidv4()} cartItem={cartItem}></CardItemCard>
  ));

  return (
    <>
      <CartWrapper isOpen={isCartOpen}>
        <Title>Your shopping cart</Title>
        <Products>{cartItems}</Products>
        <Total>Total: ${sumTotal()}</Total>
        <CommonButton
          content="Checkout"
          size="wide"
          color="primary"
          animation="color"
        />
        <CommonButton
          onClick={() => dispatch(setIsCartOpen(false))}
          content="Close"
          size="wide"
          color="red"
          animation="color"
        />
      </CartWrapper>
      <Overlay
        onClick={() => dispatch(setIsCartOpen(false))}
        isOpen={isCartOpen}
      />
    </>
  );
};

export default Cart;
