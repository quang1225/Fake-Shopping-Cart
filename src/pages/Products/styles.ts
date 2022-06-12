import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 44rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;

export const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Categories = styled.ul`
  display: flex;
  gap: 12px;

  li {
    padding: 12px;
    border: 1px solid black;
    transition: border 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;

    :hover {
      border-color: #00f9bd;
      color: #00f9bd;
    }

    &.active {
      color: white;
      border-color: #00f9bd;
      background-color: #00f9bd;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CategoriesMobile = styled.div`
  display: none;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInputBase-root {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
