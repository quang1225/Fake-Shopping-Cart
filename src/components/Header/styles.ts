import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popover } from '@mui/material';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};

  .mobile_cart_button {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile_cart_button {
      display: block;
      position: fixed;
      padding: 15px;
      background: black;
      bottom: 14px;
      right: 14px;
      border-radius: 40px;
      transition: opacity 0.3s ease;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`;

export const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AnimatedButton = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: white;
  font-size: 28px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`;

export const Quantity = styled.div`
  position: absolute;
  top: 0.2rem;
  right: -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
`;

export const UserButton = styled.div`
  width: 42px;
  height: 42px;
  background: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-transform: uppercase;

  :hover {
    background: #bdbdbd;
  }
`;

export const CustomPopover = styled(Popover)`
  .MuiPopover-paper {
    background-color: white;
    padding: 16px;
    margin-top: 8px;
  }
`;

export const PopupContent = styled.div`
  .user_info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 2rem;
    margin-bottom: 4rem;

    div {
      display: flex;
    }

    .fullname {
      font-size: 3rem;
      justify-content: center;
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }

    svg {
      margin-right: 1.2rem;
      font-size: 3rem;
    }
  }
`;

export const MenuMobileContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;

  a {
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 700;
  }
`;
