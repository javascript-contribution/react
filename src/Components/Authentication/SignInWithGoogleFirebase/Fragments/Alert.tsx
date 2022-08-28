import React from 'react';
import { Alert, AlertTitle, Box, Button, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const SuccessAlert  = () => <Alert severity="success">This is a success alert — You have successfully logged in!</Alert>;

export function ErrorAlert (props: { error: string  | boolean | null | undefined; }) {
    return (
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert : {props.error}— <strong>check it out!</strong>
      </Alert>
    )
} 
export default function TransitionAlerts(props: any) {
  const [open, setOpen] = React.useState(true);
  const [status, setStatus] = React.useState('info');
 
  React.useEffect(() => {
    if (props.error){
        setStatus('error');
    } else if (props.success) {
        setStatus('success')
    } else if (props.loading){
        setStatus('info')
    }
  }, [open])
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        // @ts-ignore
          severity={status}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {status === 'success'?  'Successfully logged in!' : status === 'error' ? props.error : status === 'info' ? 'Loading information...' : null}
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Check Status
      </Button>
    </Box>
  );
}