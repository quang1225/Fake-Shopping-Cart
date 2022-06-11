import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
`;

export const GithubLink = styled.a`
  display: flex;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
export const BackgroundWave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -100;
`;
