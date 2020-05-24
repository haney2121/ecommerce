import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import CollectionPreview from './CollectionPreview';

//redux actions and selectors
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return collections.map(({ id, ...otherProps }) => (
    <CollectionPreview key={id} {...otherProps} />
  ));
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
