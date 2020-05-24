import React from 'react';
import { connect } from 'react-redux';

//global components
import Button from '../Button';

//redux
import { addItemToCart } from '../../redux/cart/cart.actions';

//styles
import { CollectionItemStyles } from '../../styles';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyles>
      <div className='Image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='Collection-Footer'>
        <div className='Name'>{name}</div>
        <div className='Price'>${price}</div>
      </div>
      <Button
        onClick={() => addItemToCart(item)}
        inverted
        width='80%'
        opacity='0.7'
        position='absolute'
        top='255px'>
        Add to cart
      </Button>
    </CollectionItemStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
