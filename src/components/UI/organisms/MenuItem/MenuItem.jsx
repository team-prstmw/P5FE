import { Box, Button, Modal, TextareaAutosize, Typography } from '@mui/material';
import { useState } from 'react';
import './MenuItem.css';

function MenuItem() {
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inc = () => {
    setAmount((prevState) => prevState + 1);
  };
  const dec = () => {
    if (amount > 0) {
      setAmount((prevState) => prevState - 1);
    }
    return;
  };
  return (
    <Box className="MenuItem">
      <Typography className="menuItem__header">GNOCCHETTI</Typography>
      <Typography className="menuItem__description">shrimp, chili, rosemary oil</Typography>
      <Typography className="menuItem__weight">100g</Typography>
      <Typography className="menuItem__price">$32</Typography>
      <Button className="menuItem__decrease-button" onClick={dec} variant="contained">
        -
      </Button>
      <Typography className="menuItem__amount">{amount}</Typography>
      <Button className="menuItem__increase-button" onClick={inc} variant="contained">
        +
      </Button>
      <Button onClick={handleOpen} className="menuItem__order-button" variant="contained">
        ADD INFO
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 200 }}
          />
          <Button onClick={handleClose} className="menuItem__additional-i-button" variant="contained">
            SAVE
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default MenuItem;
