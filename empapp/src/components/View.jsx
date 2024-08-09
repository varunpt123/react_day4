import { Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell> Salary</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>

                      <TableRow>
                          <TableCell>vishnu</TableCell>
                          <TableCell>21</TableCell>
                          <TableCell>bca</TableCell>
                          <TableCell>30000</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>

      </div>
  )
}

export default View