import styled from 'styled-components';

export const Wrapper = styled.div`
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

    .address {
      text-transform: capitalize;
    }

    svg {
      margin-right: 1.2rem;
      font-size: 3rem;
    }
  }
`;
