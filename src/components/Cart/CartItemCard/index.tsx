import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import CommonButton from 'src/components/elements/CommonButton';
import { addToCart, removeFromCart } from 'src/state/slices/shopSlice';
import { ICartItem } from 'src/state/types/shop.types';
import {
  CartItemCardWrapper,
  ImageContainer,
  Details,
  Title,
  AmountChanger,
  Image,
} from './styles';

interface Props {
  cartItem: ICartItem;
}

const CardItemCard = ({ cartItem }: Props) => {
  const dispatch = useDispatch();
  const { title, price, image } = cartItem.product;

  const formatTitle = (title: string) => {
    return title.length <= 14 ? title : title.substring(0, 14) + '...';
  };

  const sumPrice = () => {
    return (price * cartItem.quantity).toFixed(2);
  };

  return (
    <CartItemCardWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
        <div>${sumPrice()}</div>
        <AmountChanger>
          <CommonButton
            onClick={() => dispatch(removeFromCart(cartItem.product))}
            content={<FaMinus />}
            color="grey"
            animation="color"
          ></CommonButton>
          <div>{cartItem.quantity}</div>
          <CommonButton
            onClick={() => dispatch(addToCart(cartItem.product))}
            content={<FaPlus />}
            color="grey"
            animation="color"
          ></CommonButton>
        </AmountChanger>
      </Details>
    </CartItemCardWrapper>
  );
};

export default CardItemCard;
