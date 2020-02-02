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
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem subtitle='SHOP NOW' key={id} {...otherSectionProps} />
      ))}
    </DirectoryStyles>
  );
};

export default Directory;
