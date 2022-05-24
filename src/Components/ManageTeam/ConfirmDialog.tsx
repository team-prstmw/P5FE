import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

type ConfirmDialogState = {
  title: string;
  subTitle: string;
  isOpen: boolean;
  onConfirm?: () => void;
};

type ConfirmDialogProps = {
  confirmDialog: ConfirmDialogState;
  setConfirmDialog: (isOpen: ConfirmDialogState) => void;
};

export function ConfirmDialog({ confirmDialog, setConfirmDialog }: ConfirmDialogProps) {
  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle>{confirmDialog.title}</DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>{confirmDialog.subTitle}</DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
        <Button variant="contained" onClick={confirmDialog.onConfirm}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
