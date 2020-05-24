import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//image
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//styles
import { CartIconStyles } from '../../styles';

//reduce actions and selectors
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconStyles onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </CartIconStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
