import styled, { css } from 'styled-components';

export const CartWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1;
  top: 0;
  right: -110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 59rem;
  height: 100%;
  padding: 6rem;
  background-color: #fff;
  font-size: 3rem;
  transition: right 0.5s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      right: 0;
    `}

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: bold;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow: auto;
`;

export const Total = styled.div`
  font-weight: bold;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  transition: left 0.5s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      left: 0;
    `}
`;
