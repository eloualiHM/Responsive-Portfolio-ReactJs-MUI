import { Box, Card, CardActionArea, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from './projectsData'
import GitHubIcon from '@mui/icons-material/GitHub';
function ProjectInfo() {
    const { id } = useParams()
    const project = projectsData[id - 1]
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} bgcolor='var(--light-color)' textAlign='center' minHeight='calc(100vh - 134px)'>
            <Stack alignItems='center'>
                <Typography variant='h3' pb={2} fontWeight="bold">{project.name}</Typography>
                <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={project.img}
                            alt="green iguana"
                        />
                    </CardActionArea>

                </Card>
                <Typography variant="h5" component="div" py={2} sx={{ display: "flex", justifyContent: 'center' }}>
                    <p style={{ fontWeight: 'bold' }}>Skills: </p> {`${project.skills}, `}

                </Typography>
                <GitHubIcon sx={{ color: 'gray', fontSize: '40px', cursor: 'pointer', '&:hover': { color: 'rgb(0, 0, 0)' } }} />
            </Stack>
        </Box>
    )
}

export default ProjectInfo
