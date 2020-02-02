import React from 'react';
import { withRouter } from 'react-router-dom';

//components
import CollectionItem from './CollectionItem';

//styles
import { CollectionPreviewStyles } from '../../styles';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  return (
    <CollectionPreviewStyles
      onClick={() => history.push(`${match.url}/${routeName}`)}>
      <h1 className='Title'>{title}</h1>
      <div className='Preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </CollectionPreviewStyles>
  );
};

export default withRouter(CollectionPreview);
