import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//page
import CollectionPage from './CollectionPage';

//components
import { CollectionOverview, WithSpinner } from '../components';

//styles
import { ShopPageStyles } from '../styles';

//redux actions and selectors
import { getShopCollections } from '../redux/shop/shop.actions';

//firebase
import { firestore } from '../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../firebase/firebase.functions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, getShopCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapShot) => {
      let responseData = await convertCollectionsSnapshotToMap(snapShot);

      getShopCollections(responseData);

      if (responseData) {
        setLoading(false);
      }
    });

    return () => {};
  }, [getShopCollections]);

  return (
    <ShopPageStyles>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </ShopPageStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getShopCollections: (collections) =>
    dispatch(getShopCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
