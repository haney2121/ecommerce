import React from 'react';

//styles
import { MenuItemStyles } from '../../styles/MenuItemStyles';

const MenuItem = ({ title, subtitle, imageUrl, linkUrl, size }) => {
  return (
    <MenuItemStyles size={size}>
      <div
        className='Background-Image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='Content'>
        <h1 className='Title'>{title}</h1>
        <span className='SubTitle'>{subtitle}</span>
      </div>
    </MenuItemStyles>
  );
};

export default MenuItem;
