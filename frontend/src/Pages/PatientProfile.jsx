import { Stack, Grid, Typography } from '@mui/material'
import React from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import profileImg from "../assets/profile.jpg";

const PatientProfile = () => {
  return (
    <Stack direction="column" sx={{ width: "100%", padding: "1rem" }}>
      <DashboardHeader/>
      <Grid container spacing={1} margin={1}  sx={{backgroundColor: 'white'}} >
        <Grid item sx={8}>
          <Stack direction='row'>
            <Stack direction='column' >
              <div style={{}}>
              <img src={profileImg} alt="" style={{width: '150px'}} />
              </div>
              <Typography variant="h5" color="initial">Jeevesh Lodhi</Typography>
              <Typography variant="subtitle2" color="initial">lodhijeevesh@gmail.com</Typography>
              <Typography variant="body1" color="initial">Appointments</Typography>
              <Stack direction='row'>
                <div>
                  <Typography variant="h1" color="initial">5</Typography>
                  <Typography variant="subtitle1" color="initial">Past</Typography>
                </div>
                <div>
                  <Typography variant="h1" color="initial">2</Typography>
                  <Typography variant="subtitle1" color="initial">Upcoming</Typography>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default PatientProfile