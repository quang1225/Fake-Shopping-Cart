import styled from 'styled-components';

export const CartItemCardWrapper = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  height: 13rem;
  width: 20%;
  margin: auto;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`;

export const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  overflow: hidden;
`;

export const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
