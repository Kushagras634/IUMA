import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



const Prescription = ({ patientDetails, doctorDetails, medicines, total }) => {

  return (
    <Paper sx={{ padding: '1rem', height: '100%'}}>
      <h2>Patient Details</h2>
      <p>
        Name: {patientDetails.name} <br />
        Age: {patientDetails.age} <br />
        Address: {patientDetails.address}
      </p>
      <h2>Doctor Details</h2>
      <p>
        Name: {doctorDetails.name} <br />
        Registration Number: {doctorDetails.registrationNumber}
      </p>
      <h2>Prescribed Medicines</h2>
      <TableContainer>
        <Table sx={{minWidth: 650}}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Dosage</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((medicine, index) => (
              <TableRow key={index}>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.dosage}</TableCell>
                <TableCell>{medicine.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
  );
};

export default Prescription;


