import { Popover } from '@mui/material';
import { MOBILE_BIG } from 'src/constants/constants';
import styled from 'styled-components';

export const Wrapper = styled.header``;

export const CustomPopover = styled(Popover)`
  .MuiPopover-paper {
    background-color: white;
    padding: 16px;
  }

  @media (max-width: ${MOBILE_BIG}px) {
    .MuiPopover-paper {
      top: 29rem !important;
      left: 2.2rem !important;
    }
  }
`;

export const TypeaheadContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .scroll-wrap {
    overflow-y: auto;
  }

  .MuiCircularProgress-root {
    margin: 12px auto;
  }

  .title {
    padding: 16px 12px 8px 12px;
    font-size: 12px;
    font-weight: bold;
    &.search-text {
      text-align: center;
      border-bottom: none;
    }
  }

  li,
  .title {
    border-bottom: 1px solid rgb(229, 232, 235);
  }

  ul {
    margin: 0;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.8rem;
      border-bottom: 1px solid rgb(229, 232, 235);
      color: unset;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
      }

      .left-side {
        display: flex;
        align-items: center;
        .name {
          font-size: 14px;
        }
      }

      .right-side {
        font-size: 1.8rem;
        font-weight: 700;
        width: 70px;
        text-align: right;
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
        object-fit: cover;
        box-sizing: border-box;
      }
    }

    &.products {
      a {
        justify-content: space-between;
      }
    }
  }

  @media (max-width: ${MOBILE_BIG}px) {
    li {
      padding: 8px !important;
    }
    .title.search-text {
      padding-bottom: 0;
    }
  }
`;
