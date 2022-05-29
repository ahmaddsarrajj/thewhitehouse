import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  return (
    <Alert severity="info">
    Comming soon! 
        <Alert
        action={
    <Button color="inherit" size="small">
      UNDO
    </Button>}
    >

        </Alert>
    </Alert>
  );
}
