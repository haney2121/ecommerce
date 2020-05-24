import React from 'react';
import { connect } from 'react-redux';

//redux actions and selectors
import {
  removeItemFromCheckout,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';

//styles
import { CheckoutItemStyles } from '../../styles';

const CheckoutItem = ({
  item,
  removeItemFromCheckout,
  addItemToCart,
  removeItemFromCart,
}) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CheckoutItemStyles>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(item.id)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div
        className='remove-button'
        onClick={() => removeItemFromCheckout(item.id)}>
        &#10005;
      </div>
    </CheckoutItemStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCheckout: (itemId) => dispatch(removeItemFromCheckout(itemId)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
