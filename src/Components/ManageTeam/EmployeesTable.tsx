import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { NewEmployeeData } from '../../models/NewEmployeeData';
import { ConfirmDialog } from './ConfirmDialog';
import { EmployeeForm } from './EmployeeForm';
import { Notify } from './Notify';
import { PopUpEmployeeForm } from './PopUpEmployeeForm';

function createData(id: number, login: string, password: string, role: 'cook' | 'manager' | 'waiter' | '') {
  return { id, login, password, role };
}

const ROWS = [
  createData(1, 'dawpal12', 'pasikonik', 'waiter'),
  createData(2, 'julrybo13', 'samolocik', 'manager'),
  createData(3, 'kamwene16', 'pandysafajne', 'waiter'),
  createData(4, 'szymkno21', 'kotlet', 'cook'),
  createData(5, 'ewetryb31', 'ziemniaczki', 'cook'),
];

type NotifyState = {
  isOpen: boolean;
  type?: 'success' | 'error';
  message: string;
};

type ConfirmDialogState = {
  isOpen: boolean;
  title: string;
  subTitle: string;
  onConfirm?: () => void;
};

export function EmployeesTable() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState<NewEmployeeData | null>(null);
  const [notify, setNotify] = useState<NotifyState>({ isOpen: false, message: '', type: undefined });
  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState>({ isOpen: false, title: '', subTitle: '' });

  const addOrEdit = () => {
    setOpenPopUp(false);
    setRecordForEdit(null);
    setNotify({
      isOpen: true,
      message: 'Submitted Successfully',
      type: 'success',
    });
  };

  const openInPopUp = (row: NewEmployeeData) => {
    setRecordForEdit(row);
    setOpenPopUp(true);
  };

  const onDelete = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error',
    });
  };

  return (
    <>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Employees</Typography>
          <Tooltip title="Filter list">
            <Button size="small" sx={{ fontWeight: 'bold' }} onClick={() => setOpenPopUp(true)} startIcon={<AddIcon />}>
              create
            </Button>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">
                  Login
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">
                  Password
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">
                  Role
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {ROWS.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.login}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => {
                        openInPopUp(row);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: 'Are you sure to delete this record?',
                          subTitle: "You can't undo this operation",
                          onConfirm: () => {
                            onDelete();
                          },
                        });
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <PopUpEmployeeForm title="Employee form" openPopUp={openPopUp} setOpenPopUp={setOpenPopUp}>
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </PopUpEmployeeForm>
      <Notify notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </>
  );
}
