import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';

type PopUpEmployeeFormProps = {
  title: string;
  children: JSX.Element;
  openPopUp: boolean;
  setOpenPopUp: (setOpenPopUp: boolean) => void;
};

export function PopUpEmployeeForm({ title, children, openPopUp, setOpenPopUp }: PopUpEmployeeFormProps) {
  return (
    <Dialog open={openPopUp} maxWidth="md">
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            onClick={() => {
              setOpenPopUp(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
