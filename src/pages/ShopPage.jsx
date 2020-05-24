import React from 'react';
import { Route } from 'react-router-dom';

//page
import CollectionPage from './CollectionPage';

//components
import { CollectionOverview } from '../components';

//styles
import { ShopPageStyles } from '../styles';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <ShopPageStyles>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageStyles>
  );
};

export default ShopPage;
