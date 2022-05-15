import './DiningRoomTable.css';

import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';

import DiningRoomModal from '../DiningRoomModal/DiningRoomModal';

const tableStatuses = {
  free: 'FREE',
  occupied: 'OCCUPIED',
  toClean: 'TO CLEAN',
};

function createData(tableNumber: number, tableStatus: string, tableInfo: string, tableAlert: string) {
  return { tableNumber, tableStatus, tableInfo, tableAlert };
}

const rows = [
  createData(1, tableStatuses.occupied, 'Gluten intolerant clients', 'Ready to serve'),
  createData(2, tableStatuses.toClean, '', 'Needs cleaning - Vanessa'),
  createData(3, tableStatuses.free, '', ''),
  createData(4, tableStatuses.free, '', ''),
];

export default function DiningRoomTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Table number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Info</TableCell>
              <TableCell>Alert</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={handleOpen}
                key={row.tableNumber}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.tableNumber}
                </TableCell>
                <TableCell>{row.tableStatus}</TableCell>
                <TableCell>{row.tableInfo}</TableCell>
                <TableCell>{row.tableAlert}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" style={{ width: '100%' }}>
          Add Table
        </Button>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <DiningRoomModal />
      </Modal>
    </div>
  );
}
