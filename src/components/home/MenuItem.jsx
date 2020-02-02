import React from 'react';
import { withRouter } from 'react-router-dom';

//styles
import { MenuItemStyles } from '../../styles/MenuItemStyles';

const MenuItem = ({ title, subtitle, imageUrl, linkUrl, size, history }) => {
  return (
    <MenuItemStyles size={size} onClick={() => history.push(`${linkUrl}`)}>
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

export default withRouter(MenuItem);
