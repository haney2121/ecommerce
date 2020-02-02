import React, { useState } from 'react';

//components
import { CollectionPreview } from '../components';

//styles
import { ShopPageStyles } from '../styles';

//utils
import { SHOP_DATA } from '../utils/shop.data';

const ShopPage = props => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <ShopPageStyles>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </ShopPageStyles>
  );
};

export default ShopPage;
