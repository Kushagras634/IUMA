import { Stack, Typography, Card, CardContent } from '@mui/material';
import React from 'react';

const LabRecords = () => {
    return ( <>
        <div className='ml-56 w-full'>
            <Typography className='p-5' variant='h4'>Records</Typography>
            <Stack direction="row" className='p-5'>
                <div className='w-full'>
                    <Typography variant='h6'>Patient Name</Typography>
                </div>
                <div className='w-full'>
                    <Typography variant='h6'>Doctor Name</Typography>
                </div>
                <div className='w-full'>
                    <Typography variant='h6'>Date</Typography>
                </div>
                <div className='w-full'>
                    <Typography variant='h6'>Completed</Typography>
                </div>
            </Stack>
            <Stack className='w-full gap-5'>
                <Card sx={{ maxWidth: 1200 }}>
                    <CardContent>
                            <Stack direction="row">
                                <div className='w-full'>
                                <Typography variant='body1'>Jeevesh Lodhi</Typography>
                                </div>
                                <div className='w-full'>
                                <Typography variant='body1'>Dr. Joshi</Typography>
                                </div>
                                <div className='w-full'>
                                <Typography variant='body1'>5 May 2023</Typography>
                                </div>
                                <div className='w-full flex gap-3'>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>Yes</Typography>
                                    <input name='status1' value="y" className='border' type='radio' />
                                </div>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>No</Typography>
                                    <input name='status1' value="n" className='border' type='radio' />
                                </div>
                                </div>
                            </Stack>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 1200 }}>
                    <CardContent>
                        <Stack direction="row">
                            <div className='w-full'>
                                <Typography variant='body1'>Jeevesh Lodhi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>Dr. Joshi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>5 May 2023</Typography>
                            </div>
                            <div className='w-full flex gap-3'>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>Yes</Typography>
                                    <input name='status2' value="y" className='border' type='radio' />
                                </div>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>No</Typography>
                                    <input name='status2' value="n" className='border' type='radio' />
                                </div>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 1200 }}>
                    <CardContent>
                        <Stack direction="row">
                            <div className='w-full'>
                                <Typography variant='body1'>Jeevesh Lodhi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>Dr. Joshi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>5 May 2023</Typography>
                            </div>
                            <div className='w-full flex gap-3'>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>Yes</Typography>
                                    <input name='status3' value="y" className='border' type='radio' />
                                </div>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>No</Typography>
                                    <input name='status3' value="n" className='border' type='radio' />
                                </div>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 1200 }}>
                    <CardContent>
                        <Stack direction="row">
                            <div className='w-full'>
                                <Typography variant='body1'>Jeevesh Lodhi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>Dr. Joshi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>5 May 2023</Typography>
                            </div>
                            <div className='w-full flex gap-3'>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>Yes</Typography>
                                    <input name='status4' value="y" className='border' type='radio' />
                                </div>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>No</Typography>
                                    <input name='status4' value="n" className='border' type='radio' />
                                </div>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 1200 }}>
                    <CardContent>
                        <Stack direction="row">
                            <div className='w-full'>
                                <Typography variant='body1'>Jeevesh Lodhi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>Dr. Joshi</Typography>
                            </div>
                            <div className='w-full'>
                                <Typography variant='body1'>5 May 2023</Typography>
                            </div>
                            <div className='w-full flex gap-3'>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>Yes</Typography>
                                    <input name='status5' value="y" className='border' type='radio' />
                                </div>
                                <div className='flex gap-1'>
                                    <Typography variant='body1'>No</Typography>
                                    <input name='status5' value="n" className='border' type='radio' />
                                </div>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </div>
    </> );
}

export default LabRecords;