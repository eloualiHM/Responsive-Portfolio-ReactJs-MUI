import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

const navItems = ['home', 'projects', 'experience'];

function Navbare() {
    return (
        <Box sx={{ display: 'flex' }}   >

            <AppBar component="nav" sx={{ backgroundColor: 'var(--main-color)' }}>
                <Toolbar  >
                    <Box width='100%' textAlign='center' >
                        {navItems.map((item) => (
                            <Button sx={{ fontWeight: 'bold' }} key={item}>
                                {
                                    item === 'home' ? <NavLink to='/'>{item}</NavLink> : <NavLink to={`/${item}`}>{item}</NavLink>
                                }

                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="main" >
                <Toolbar />

            </Box>
        </Box>
    );
}



export default Navbare;
