import React from 'react';
import { connect } from 'react-redux';

//components
import { CollectionItem } from '../components';

//redux actions and selectors
import { selectCollection } from '../redux/shop/shop.selectors';

//styles
import { CollectionPageStyles } from '../styles';

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  return (
    <CollectionPageStyles>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </CollectionPageStyles>
  );
};

const mapStateToProps = (state, ownProps) => ({
  //this is necessary this selector needs a part of state depending on url
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
