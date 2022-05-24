import './DiningRoomTable.css';

import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';

import { DiningRoomModal } from '../DiningRoomModal/DiningRoomModal';

const TABLE_STATUSES = {
  free: 'FREE',
  occupied: 'OCCUPIED',
  toClean: 'TO CLEAN',
};

function createData(tableNumber: number, tableStatus: string, tableInfo: string, tableAlert: string) {
  return { tableNumber, tableStatus, tableInfo, tableAlert };
}

export function DiningRoomTable() {
  const [rows, setRows] = useState([createData(1, TABLE_STATUSES.free, '', '')]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createNewTable() {
    const { tableNumber } = rows[rows.length - 1];
    rows[rows.length] = createData(tableNumber + 1, TABLE_STATUSES.free, '', '');
    setRows(rows);
  }

  return (
    <div className="DiningRoomTable__table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 0 }}>
          <TableHead>
            <TableRow className="DiningRoomTable__table-head">
              <TableCell style={{ color: 'white', fontWeight: '600' }}>Table number</TableCell>
              <TableCell style={{ color: 'white', fontWeight: '600' }}>Status</TableCell>
              <TableCell style={{ color: 'white', fontWeight: '600' }}>Info</TableCell>
              <TableCell style={{ color: 'white', fontWeight: '600' }}>Alert</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={handleOpen}
                key={row.tableNumber}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="DiningRoomTable__table-row"
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
      </TableContainer>
      <Button variant="contained" style={{ width: '100%', marginTop: '1rem' }} onClick={() => createNewTable()}>
        Add Table
      </Button>
      <Modal open={open} onClose={handleClose}>
        <DiningRoomModal />
      </Modal>
    </div>
  );
}
