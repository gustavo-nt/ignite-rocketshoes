import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  overflow: auto;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &::-webkit-scrollbar {
    height: 15px;
    cursor: pointer;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    border: 4px solid #fff;
    background: rgba(0, 0, 0, .2);
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, .25);
  }
  
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    &:nth-child(2) {
      min-width: 230px;
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    display: flex;
    align-items: center;

    border: 0;
    padding: 6px;
    background: none;

    &.increment-product {
      margin-left: -1px;
    }

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 20px;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Button = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#7159c1')};
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  svg {
    color: #333;
    margin-bottom: 10px;
  }

  h2 {
    color: #333;
    margin-bottom: 30px;
  }
`;