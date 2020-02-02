import React, { useState } from 'react';

//components
import { MenuItem } from '../index';

//styles
import { DirectoryStyles } from '../../styles';

//utils
import { sectionsData } from '../../utils/directory.data';

const Directory = props => {
  const [sections, setSections] = useState(sectionsData);

  return (
    <DirectoryStyles>
      {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
        <MenuItem
          subtitle='SHOP NOW'
          title={title}
          size={size}
          key={id}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryStyles>
  );
};

export default Directory;
