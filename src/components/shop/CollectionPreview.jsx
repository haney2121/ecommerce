import React from 'react';

//components
import CollectionItem from './CollectionItem';

//styles
import { CollectionPreviewStyles } from '../../styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewStyles>
      <h1 className='Title'>{title}</h1>
      <div className='Preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewStyles>
  );
};

export default CollectionPreview;
