import { Box, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {

    const FrontEnd = ['ReactJS', 'Angular', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'MaterialUI']
    const BackEnd = ['NodeJS', 'JavaScript', 'ExpressJS', 'GraphQL', 'Apollo']
    const Languages = ['JavaScript', 'PHP', 'C#', 'C++', 'C', 'Python']


    return (
        <Stack className='building-page' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} bgcolor='var(--main-color)' color='white' textAlign='center' minHeight='calc(100vh - 134px)'>
            <Stack spacing={2} >
                <Typography variant='h2' fontWeight='bold' color='var(--secondair-color)' sx={{ '@media(max-width:590px)': { fontSize: '40px' } }}>Hi, My name is Elouali</Typography>
                <Typography variant='body1' sx={{ '@media(max-width:590px)': { fontSize: '14px' } }}>A Front End developer with a passion for learning and creating.</Typography>
                <List>
                    <ListItem disablePadding sx={{ justifyContent: 'center', gap: '5px' }} >
                        <LinkedInIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(42, 163, 255)' } }} />
                        <EmailIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(255, 212, 42)' } }} />
                        <YouTubeIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(255, 42, 42)' } }} />
                        <GitHubIcon sx={{ fontSize: '30px', cursor: 'pointer', '&:hover': { color: 'rgb(0, 0, 0)' } }} />
                    </ListItem>
                </List>
            </Stack>
        </Stack>
    )
}

export default Home
