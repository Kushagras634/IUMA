import React from 'react';
import Prescription from '../../Components/PrescriptionComponent';
import { Stack, Typography } from '@mui/material';
const HospitalPrescription = () => {
    return (<div className='w-full ml-56'>
        <div className='pl-5'>
            <Typography variant='h4'>Prescription</Typography>
        </div>
        <div className='bg-white '>
            <Stack className="p-4 my-2 rounded">
                <Prescription
                    patientDetails={{
                        name: "Jeevesh Lodhi",
                        age: "22",
                        address: "816, Shekhupura Colony, Vikas Nagar, Lucknow",
                    }}
                    doctorDetails={{
                        name: "Dr. Raj Singh",
                        registrationNumber: "738731873883884",
                    }}
                    medicines={[
                        { name: "XYZ", dosage: "2 times a day", duration: "1 week" },
                    ]}
                />
            </Stack>
            <Stack className="p-4 my-2 rounded">
                <Prescription
                    patientDetails={{
                        name: "Jeevesh Lodhi",
                        age: "22",
                        address: "816, Shekhupura Colony, Vikas Nagar, Lucknow",
                    }}
                    doctorDetails={{
                        name: "Dr. Raj Singh",
                        registrationNumber: "738731873883884",
                    }}
                    medicines={[
                        { name: "XYZ", dosage: "2 times a day", duration: "1 week" },
                    ]}
                />
            </Stack>
            <Stack className="p-4 my-2 rounded">
                <Prescription
                    patientDetails={{
                        name: "Jeevesh Lodhi",
                        age: "22",
                        address: "816, Shekhupura Colony, Vikas Nagar, Lucknow",
                    }}
                    doctorDetails={{
                        name: "Dr. Raj Singh",
                        registrationNumber: "738731873883884",
                    }}
                    medicines={[
                        { name: "XYZ", dosage: "2 times a day", duration: "1 week" },
                    ]}
                />
            </Stack>
        </div>
    </div> );
}

export default HospitalPrescription;