import './DiningRoomPage.css';

import { Typography } from '@mui/material';
import { DiningRoomTable } from 'src/components/DiningRoomTable/DiningRoomTable';

export function DiningRoomPage() {
  return (
    <div className="DiningRoomPage">
      <Typography variant="h3" className="DiningRoomPage__title">
        Dining room
      </Typography>
      <DiningRoomTable />
    </div>
  );
}
