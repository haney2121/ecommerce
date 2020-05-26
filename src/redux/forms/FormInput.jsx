import React from 'react';

//styles
import { FormInputStyles } from '../../styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputStyles>
      <input className='Form-Input' onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'Shrink' : ''
          } Form-Input-Label`}>
          {label}
        </label>
      )}
    </FormInputStyles>
  );
};

export default FormInput;
