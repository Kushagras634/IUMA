import React from 'react';

import { Grid, Typography, Avatar, Paper } from '@mui/material';

const PatientForm = () => {
  return (
    <Paper sx={{padding: '3rem'}}>
      <Avatar sx={{width: 150, height: 150, margin:"0 auto"}} />
      <Typography variant="h5" sx={{textAlign: 'center', marginTop: 2}}>
        John Doe
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Date of Birth: 01/01/2000
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Gender: Male
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Address: 123 Main St, Anytown USA 12345
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Phone: (123) 456-7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Email: john.doe@email.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Medical History: Yes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Currently Taking Medications: Yes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Allergies/Adverse Reactions: No
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PatientForm;
