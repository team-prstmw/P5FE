import './DiningRoomModal.css';

import { Box, Button, TextField, Typography } from '@mui/material';

export function DiningRoomModal() {
  return (
    <Box className="diningRoomModal__modal">
      <Typography variant="h5">Status</Typography>
      <div className="diningRoomModal__button-flex margin-bottom">
        <Button variant="contained">FREE</Button>
        <Button variant="contained">OCCUPIED</Button>
        <Button variant="contained">TO CLEAN</Button>
      </div>

      <div className="margin-bottom">
        <Typography variant="h5">Info</Typography>
        <TextField multiline fullWidth minRows={1} placeholder="Additional Information" />
      </div>

      <div className="margin-bottom">
        <Typography variant="h5">Alert</Typography>
        <TextField multiline fullWidth minRows={1} placeholder="Alert goes here" />
      </div>

      <div className="diningRoomModal__button-flex margin-bottom">
        <Button variant="contained">New order</Button>
        <Button variant="contained">Manage orders</Button>
      </div>

      <div className="margin-bottom">
        <Button fullWidth variant="contained">
          SAVE AND CLOSE
        </Button>
      </div>

      <Button variant="contained" color="error" className="diningRoomModal__button-delete">
        DELETE TABLE
      </Button>
    </Box>
  );
}
