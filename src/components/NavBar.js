import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconCart from './CartWidget';


function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            Productos
          </Typography>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>
          <IconCart />
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar