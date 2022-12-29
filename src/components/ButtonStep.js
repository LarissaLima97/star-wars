import * as React from 'react';
import Button from '@mui/material/Button';

const ButtonStep = ({children, onClick, disabled}) => {
  return (
    <div>
        <Button onClick={onClick} disabled={disabled} variant="contained">{children}</Button>
    </div>
  );
}

export default ButtonStep;