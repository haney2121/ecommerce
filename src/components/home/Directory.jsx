import React from 'react';
import { createStructuredSelector } from 'reselect';

//components
import { MenuItem } from '../index';

//redux actions and selectors
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

//styles
import { DirectoryStyles } from '../../styles';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
  return (
    <DirectoryStyles>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem subtitle='SHOP NOW' key={id} {...otherSectionProps} />
      ))}
    </DirectoryStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
