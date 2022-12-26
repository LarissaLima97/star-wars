import * as React from 'react';
import Button from '@mui/material/Button';

const ButtonStep = ({children}) => {
  return (
    <div>
        <Button variant="contained">{children}</Button>
    </div>
  );
}

export default ButtonStep;