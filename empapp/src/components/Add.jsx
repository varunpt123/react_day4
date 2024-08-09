import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      <div>
          <Typography variant="h3">Employee form</Typography>
          <TextField
              variant="outlined"
              label="Name"
              name="Sal"
          />
          <br /><br />
          <TextField
              variant="outlined"
              label="Salary"
              name="Sal"
          />
          <br /><br />
          <TextField
              variant="outlined"
              label="Salary"
              name="Sal"
          />
          <br /><br />
          <TextField
              variant="outlined"
              label="Salary"
              name="Sal"
          />
          <Button>Add</Button>

      </div>
  )
}

export default Add