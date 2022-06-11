import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`;

export const Image = styled.img`
  height: 100%;
`;

export const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;

  .title {
    font-weight: bold;
  }

  .description {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
  }

  .title {
    font-weight: bold;
  }

  .footer {
    display: flex;
    justify-content: space-between;

    .price {
      font-weight: bold;
      color: #00f9bd;
    }

    .rate {
      font-size: 16px;

      svg {
        margin-right: 3px;
      }
    }
  }
`;
