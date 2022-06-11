import { useDispatch } from 'react-redux';
import CommonButton from '../../../components/elements/CommonButton';
import { addToCart } from 'src/state/slices/shopSlice';
import { IProduct } from 'src/state/types/shop.types';
import {
  ProductCardWrapper,
  ImageContainer,
  Details,
  Info,
  Image,
} from './styles';
import { FaStar } from 'react-icons/fa';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <ProductCardWrapper>
      <ImageContainer>
        <Image src={product.image} alt={product.title} />
      </ImageContainer>
      <Details>
        <Info>
          <div className="title">{product.title}</div>
          <div className="description">{product.description}</div>
          <div className="footer">
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="rate">
              <FaStar />
              {product.rating.rate}
            </div>
          </div>
        </Info>
        <CommonButton
          onClick={() => dispatch(addToCart(product))}
          content="Add to cart"
          size="wide"
          color="dark"
          animation="color"
        />
      </Details>
    </ProductCardWrapper>
  );
};

export default ProductCard;
