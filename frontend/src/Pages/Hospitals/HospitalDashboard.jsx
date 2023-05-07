import { Stack, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import React from 'react';

const HospitalDashboard = () => {
    return ( <>
        <div className='ml-56 w-full'>
            <Stack className="container p-2">
                <div className='flex'>
                    <div className='flex-1 p-10'>
                        <Typography variant='h4'>Hospital Name</Typography>
                        <Typography variant='subtitle1'>Hospital that takes care for everyone.</Typography>
                    </div>
                    <div className='flex-1'>
                        <img className='border' src="" alt='Hospital pic' height={200} width={300} />
                    </div>
                </div><br />
                <div className='bg-white'>
                    <Typography variant='body1'>eu eiusmod Excepteur reprehenderit sint anim velit aute in do nisi eiusmod Duis dolor exercitation et amet irure pariatur. non id magna amet ad tempor elit esse officia minim amet eu aliquip pariatur cillum ullamco sed. id exercitation Duis non do occaecat tempor consectetur est id ut consequat id exercitation id et adipiscing non. adipiscing commodo deserunt aute eu lorem ex nisi eiusmod fugiat sint pariatur tempor ea sit mollit incididunt. nulla laborum cupidatat tempor proident laboris sint laborum do ea consequat exercitation cillum dolore non dolor lorem lorem aute. lorem nostrud cillum tempor ipsum eiusmod deserunt consequat deserunt laboris eu non nisi deserunt irure id Duis. pariatur in est irure Excepteur velit qui esse consectetur consectetur sunt esse aute officia nostrud adipiscing do.</Typography>
                </div>
                <div className='bg-white flex gap-5 p-5'>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="Achievements"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Award1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="Achievements"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Award2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="Achievements"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Award3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Stack>
        </div>
    </> );
}

export default HospitalDashboard;