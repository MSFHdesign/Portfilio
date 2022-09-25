import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import * as React from 'react';


// style
import '../styles/navigationStyle.css';

// Buttons 
import Mail from '../elements/Mail.js';
import Phone from '../elements/Phone.js';
import Home from '../elements/Home.js';
import Linkdin from '../elements/Linkdin.js';
import Github from '../elements/Github.js';


const AppBarStyle = {
  position: 'fixed',
    top: 'auto', 
    bottom: 0,
  bgcolor: '#f2f2f2d4',
}



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='IconFlexBox'>
      <AppBar sx={AppBarStyle} >
        <Toolbar>

        <Phone /> 
        <Mail />
        <Home />
        <Linkdin />  
        <Github />
        </Toolbar>
      </AppBar>

    </Box>
  );
}
