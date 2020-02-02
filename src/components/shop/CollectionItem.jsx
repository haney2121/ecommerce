import React from 'react';

//styles
import { CollectionItemStyles } from '../../styles';

const CollectionItem = ({ name, imageUrl, price, history }) => {
  return (
    <CollectionItemStyles>
      <div className='Image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='Collection-Footer'>
        <div className='Name'>{name}</div>
        <div className='Price'>${price}</div>
      </div>
    </CollectionItemStyles>
  );
};

export default CollectionItem;
