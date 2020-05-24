import styled from 'styled-components';

export const CartIconStyles = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;

export const CartDropdownStyles = styled.div`
  position: absolute;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background: #fff;
  top: 80px;
  right: 0;
  z-index: 5;

  .cart-items {
    height: 325px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  .empty-message {
    margin: 50px auto;
    font-size: 18px;
  }

  button {
    margin-top: auto;
  }
`;

export const CartItemStyles = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin: 0 0 15px;
  img {
    width: 30%;
  }
  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }

    .price {
    }
  }
`;
