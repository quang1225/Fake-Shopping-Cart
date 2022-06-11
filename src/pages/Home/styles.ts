import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 20rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const SmallMessage = styled.div`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`;

export const Underline = styled.img`
  width: 25rem;
  margin-top: -1rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 75rem;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 25rem;
  }
`;
