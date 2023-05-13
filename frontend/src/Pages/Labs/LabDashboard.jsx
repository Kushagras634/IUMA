import React from 'react';
import { Stack, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
const LabDashboard = () => {
    return ( <>
        <div className='ml-56 w-full'>
            <Stack direction="row">
                <div className='w-full p-5'>
                    <Typography variant='h4'>Laboratory Name</Typography>
                    <Typography variant='subtitle1'>Best medical Laboratory ever</Typography>
                </div>
                <div className='w-full p-5'>
                    <img className='border' src="" alt='Lab pic' height={180} width={300} />
                </div>
            </Stack>
            <Stack className='bg-white p-5'>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt="Licence image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Licence
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Since 1998
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card><br />
                <div>
                    <Typography variant='body1'>et magna elit cillum dolore magna sint ipsum in pariatur aliqua labore sunt sint dolor Duis fugiat fugiat. laboris consequat exercitation cupidatat enim consectetur qui qui amet in cillum aliquip non eiusmod labore lorem aliquip Duis officia. id cillum ea qui esse occaecat ad Excepteur lorem sint ipsum aliquip est in magna occaecat culpa velit adipiscing. culpa consequat deserunt elit anim magna exercitation nostrud ex dolor exercitation ex proident sit qui fugiat. lorem nostrud dolore qui adipiscing pariatur sint non consectetur ut enim sit laborum commodo qui enim consequat aute. cupidatat do id nulla ea velit laboris veniam sunt veniam id aliquip Duis commodo sit lorem est ullamco proident.</Typography>
                </div>
            </Stack>
        </div>
    </> );
}

export default LabDashboard;