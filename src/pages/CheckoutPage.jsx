import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import { CheckoutItem, StripeButton } from '../components';

//redux actions and selectors
import {
  selectCartItems,
  selectCartPriceTotal,
} from '../redux/cart/cart.selectors';

//styles
import { CheckoutPageStyles } from '../styles';

const CheckoutPage = ({ cartItems, priceTotal }) => {
  return (
    <CheckoutPageStyles>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className='total'>
        <span>TOTAL: ${priceTotal}</span>
      </div>

      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={priceTotal} />
    </CheckoutPageStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  priceTotal: selectCartPriceTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
