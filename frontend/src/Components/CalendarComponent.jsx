import { Box } from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Box sx={{width: '50%'}}>
      <Calendar onChange={setDate} value={date} className={reactCalender} />
    </Box>
  );
};

const reactCalender = {
  width: '100%'
}

export default CalenderComponent;