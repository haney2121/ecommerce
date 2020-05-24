import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//global components
import Button from '../Button';

//hooks
import { useRouter } from '../../hooks';

//components
import CartItem from './CartItem';

//reduce actions and selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

//redux actions and selectors
import { toggleCart } from '../../redux/cart/cart.actions';

//styles
import { CartDropdownStyles } from '../../styles';

const CartDropdown = ({ cartItems, dispatch }) => {
  const router = useRouter();

  const handleCheckoutRedirect = () => {
    //when not dispatch is assigned it will pull in dispatch itself as a prop
    dispatch(toggleCart());
    router.history.push('/checkout');
  };

  return (
    <CartDropdownStyles>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {!cartItems.length && (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleCheckoutRedirect}>GO TO CHECKOUT</Button>
    </CartDropdownStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

//when not dispatch is assigned it will pull in dispatch itself as a prop
export default connect(mapStateToProps)(CartDropdown);
