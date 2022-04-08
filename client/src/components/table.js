import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({data}) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Token 0</TableCell>
            <TableCell>Token 1</TableCell>
            <TableCell align="right">reserve USD</TableCell>
            <TableCell align="right">volume USD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.token0.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.token1.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.reserveUSD}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.volumeUSD}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
