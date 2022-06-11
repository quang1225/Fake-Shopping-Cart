import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import backgroundWave from '../../assets/images/background-wave.png';
import { routes } from '../../constants/constants';
import { FooterWrapper, GithubLink, BackgroundWave } from './styles';

const Footer = () => {
  const location = useLocation();

  return (
    <FooterWrapper>
      quang1225
      <GithubLink
        href="https://github.com/quang1225"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
      </GithubLink>
      {location.pathname !== routes.PRODUCTS && (
        <BackgroundWave src={backgroundWave} alt="background image" />
      )}
    </FooterWrapper>
  );
};

export default Footer;
