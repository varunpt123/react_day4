import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>Employeeapp</Typography>
                  <br></br><br></br>
                  <Link to='/l'>
                      <Button variant="contained">Add</Button>
                  </Link>
                  <Link top='/v'>
                      <Button variant="contained">View</Button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar