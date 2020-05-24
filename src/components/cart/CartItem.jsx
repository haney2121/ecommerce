import React from 'react';

//styles
import { CartItemStyles } from '../../styles';

const CartItem = ({ item }) => {
  const { id, imageUrl, price, name, quantity } = item;

  return (
    <CartItemStyles>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
