import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from "@fullcalendar/list";
import PatientsCards from "../../Components/PatientsCards";

const DoctorDashboard = () => {
  return (
    <div className="conatiner my-2 w-full">
      <div className="flex">
        <div className="bg-white max-h-[85vh] bg-scroll overflow-y-auto scroll-smooth">
          <h2 className="p-2">Todays Appointments</h2>
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
          <PatientsCards name="Jhon Doe" type="Consultaion" timing="08:00 AM" />
        </div>
        <div className="bg-white">
          <h2 className="p-2">Revenue</h2>
          <div className="flex">
            <div>
              <p className=" font-medium text-4xl">₹3204</p>
              <p>This Month</p>
            </div>
            <div>
              <p className=" font-medium text-4xl">₹892</p>
              <p>This Week</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Profile</h3>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
