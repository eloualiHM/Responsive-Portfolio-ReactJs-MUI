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
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (

        <Box component="nav" width='100%' textAlign='center' sx={{ backgroundColor: 'var(--main-color)' }}>

            <List>
                <ListItem disablePadding sx={{ color: 'white', justifyContent: 'center', gap: '25px' }} >
                    <InstagramIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(200, 51, 128)' } }} />
                    <TwitterIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(49, 178, 253)' } }} />
                    <FacebookIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(6, 123, 191)' } }} />
                    <LinkedInIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(0, 0, 0)' } }} />
                </ListItem>
            </List>
            <Typography variant='body1' color='white'>&copy; 2022 elouali.com</Typography>
        </Box>
    );
}



export default Footer;
