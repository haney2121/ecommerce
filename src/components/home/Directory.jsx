import React, { useState } from 'react';

//components
import { MenuItem } from '../index';

//styles
import { DirectoryStyles } from '../../styles';

//utils
import { SECTION_DATA } from '../../utils/directory.data';

const Directory = props => {
  const [sections, setSections] = useState(SECTION_DATA);

  return (
    <DirectoryStyles>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem subtitle='SHOP NOW' key={id} {...otherSectionProps} />
      ))}
    </DirectoryStyles>
  );
};

export default Directory;
