import React from 'react';
import IconCard from "../../Components/IconCard";
import BloodTest from "../../assets/blood-test.png";
import KidneyTest from "../../assets/kidney.png";
import ThyroidTest from "../../assets/thyroid-test.png";
import XrayTest from "../../assets/x-ray.png";
import UrineTest from "../../assets/urine-test.png";
import { Stack, Typography } from '@mui/material';

const LabServices = () => {
    return (
    <>
    <div className='ml-56'>
        <Typography className='p-5' variant='h4'>Services Available</Typography>
                <Stack direction="row" justifyContent="center" className='flex-wrap'>
                    <IconCard img={BloodTest} title="Blood Tests" link="/" />
                    <IconCard img={UrineTest} title="Urine Test" link="/" />
                    <IconCard img={XrayTest} title="X-ray" link="/" />
                    <IconCard img={ThyroidTest} title="Thyroid Tests" link="/" />
                    <IconCard img={KidneyTest} title="Kidney Tests" link="/" />
                    <IconCard img={XrayTest} title="Diabetes Tests" link="/" />
                </Stack>
        </div></>
    );
}

export default LabServices;