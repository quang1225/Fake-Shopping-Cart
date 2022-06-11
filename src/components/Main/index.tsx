import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Contact from '../../pages/Contact';
import { routes } from '../../constants/constants';
import { MainWrapper } from './styles';

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PRODUCTS} element={<Products />} />
        <Route path={routes.CONTACT} element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

export default Main;
