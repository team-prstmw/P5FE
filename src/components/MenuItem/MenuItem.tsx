import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import styles from "./MenuItem.module.css";

const useMenuItem = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inc = () => {};
  const dec = () => {};

  return {
    open,
    handleOpen,
    handleClose,
    inc,
    dec,
  } as const;
};

export function MenuItem() {
  const { open, handleOpen, handleClose, inc, dec } = useMenuItem();

  return (
    <Box className={styles.MenuItem}>
      <Typography className={styles.header}>GNOCCHETTI</Typography>
      <Typography className={styles.description}>shrimp, chili, rosemary oil</Typography>
      <Typography className={styles.weight}>100g</Typography>
      <Typography className={styles.price}>$32</Typography>
      <Button className={styles.decreaseButton} onClick={dec} variant="contained">
        -
      </Button>
      <Typography className={styles.amount}>{}</Typography>
      <Button className={styles.increaseButton} onClick={inc} variant="contained">
        +
      </Button>
      <Button onClick={handleOpen} className={styles.moreInfoButton} variant="contained">
        ADD INFO
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles.modal}>
          <Typography className={styles.modalAdditional}>Additional Information</Typography>
          <TextField multiline fullWidth minRows={5} placeholder="Additional Information" />
          <Button fullWidth onClick={handleClose} className={styles.saveCloseButton} variant="contained">
            Save and Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default MenuItem;
