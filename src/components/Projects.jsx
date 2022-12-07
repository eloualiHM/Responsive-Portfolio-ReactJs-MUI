import { Box, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { projectsData } from './projectsData'
import { useNavigate } from 'react-router-dom';
function Projects() {
    const nav = useNavigate()
    return (
        <Box p={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} bgcolor='var(--light-color)' color='black' textAlign='center' minHeight='calc(100vh - 134px)'>

            <Grid container>

                {projectsData.map(el =>
                    <Grid key={el.id} item xs={12} sm={6} md={4} lg={3} mb={2} px={2}>
                        <Card onClick={() => nav(`/project/${el.id}`)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >

                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={el.img}
                                    alt="gree iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
                                        {el.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>


                        </Card>
                    </Grid>
                )}
            </Grid>
        </Box >
    )
}

export default Projects
