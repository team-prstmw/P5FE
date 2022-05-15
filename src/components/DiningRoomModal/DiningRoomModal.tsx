import './DiningRoomModal.css';

import { Box, Button, TextField, Typography } from '@mui/material';

function DiningRoomModal() {
  return (
    <Box className="diningRoomModal__modal">
      <Typography className="diningRoomModal__modal--additional">Status</Typography>
      <div>
        <Button variant="contained">FREE</Button>
        <Button variant="contained">OCCUPIED</Button>
        <Button variant="contained">TO CLEAN</Button>
      </div>

      <Typography className="diningRoomModal__modal--additional">Info</Typography>
      <TextField multiline fullWidth minRows={1} placeholder="Additional Information" />

      <Typography className="diningRoomModal__modal--additional">Alert</Typography>
      <TextField multiline fullWidth minRows={1} placeholder="Additional Information" />

      <Button variant="contained">New order</Button>
      <Button variant="contained">Manage orders</Button>

      <Button fullWidth className="diningRoomModal__additional-i-button" variant="contained">
        SAVE AND CLOSE
      </Button>
    </Box>
  );
}

export default DiningRoomModal;
