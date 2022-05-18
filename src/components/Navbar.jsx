import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


 

export default function Navbar() {

    const thali=useSelector(state=>state.orderSlice.orederedItem)
     

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Khana Khazana.com
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/thali" style={{textDecoration:"none", color:"White"}}> Menu  </Link>
          </Typography>
          <Link to="/checkOut" style={{textDecoration:"none", color:"White"}}><ShoppingCartOutlined  style={{ fontSize: '40px',color: '#ffff' }} /><span>{thali.length} </span></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
