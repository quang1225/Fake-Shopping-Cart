import { Link } from 'react-router-dom';
import homepageImage from '../../assets/images/homepage-image.png';
import underline from '../../assets/images/underline.png';
import CommonButton from '../../components/elements/CommonButton';
import { routes } from '../../constants/constants';
import {
  HomeWrapper,
  Message,
  SmallMessage,
  BigMessage,
  Underline,
  Image,
} from './styles';

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Best online store of the year</SmallMessage>
        <BigMessage>We don't do fashion, we are fashion</BigMessage>
        <Underline src={underline} alt="underline image" />
        <Link to={routes.PRODUCTS}>
          <CommonButton
            content="Shop now"
            size="big"
            shape="round"
            color="dark"
            animation="scale"
          ></CommonButton>
        </Link>
      </Message>
      <Image src={homepageImage} alt="people"></Image>
    </HomeWrapper>
  );
};

export default Home;
