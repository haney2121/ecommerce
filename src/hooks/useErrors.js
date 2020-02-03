import { useState } from 'react';

export const useErrors = intialValues => {
  const [values, setValues] = useState(intialValues);

  return [
    values,
    message => {
      setValues({ ...message });
    }
  ];
};
