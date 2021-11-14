import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    position: relative;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  > div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    .amount {
      span {
        font-size: 12px;
        color: #999;
      }
    }
  }

  @media(max-width: 478px) {
    > div {
      position: absolute;
      right: -8px;
      top: 0;

      border-radius: 50%;
      padding: 2px 6px;
      margin-right: 0;
      background: red;

      strong {
        display: none;
      }

      .amount {
        span {
          color: #fff;

          &:last-child {
            display: none;
          }
        }
      }
    }
  }
`;
