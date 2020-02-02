import React from 'react';

const Button = ({ text, form }) => {
  return (
    <button type='submit' form={form}>
      {text}
    </button>
  );
};

export default Button;
