import React from 'react';
import Prescription from '../../Components/PrescriptionComponent';
import { Stack } from '@mui/material';
const DoctorPrescription = () => {
  return (
    <>
      <div>
        <p className='text-2xl font-semibold'>Prescriptions</p>
      </div>
      <div className='bg-white '>
        <Stack className="my-2  p-4 rounded">
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
        <Stack className="my-2  p-4 rounded">
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
        <Stack className="my-2  p-4 rounded">
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
    </>
  )
}

export default DoctorPrescription