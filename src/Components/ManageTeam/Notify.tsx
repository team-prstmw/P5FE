import { Alert, Snackbar } from '@mui/material';

type NotifyState = {
  isOpen: boolean;
  type?: 'success' | 'error';
  message: string;
};

type NotifyProps = {
  notify: NotifyState;
  setNotify: (isOpen: NotifyState) => void;
};

export function Notify({ notify, setNotify }: NotifyProps) {
  const handleClose = () => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert color={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
