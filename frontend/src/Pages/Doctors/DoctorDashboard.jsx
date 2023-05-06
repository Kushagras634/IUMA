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
        <div className="shrink px-5">
          <div className="border-solid border-2 w-fit border-white rounded-full">
            {/* --------------- add image of a doctor-------------------- */}
            <img className="object-fill" src="" alt="doctor pic" height={100} width={100} />
          </div><br/>
          <div>
            {/* --------------- add name of a doctor from session or backend-------------------- */}
            <p class="text-2xl font-semibold">Dr. Joshi</p>
            {/*-------------------------Enter the email from the session or backend-----------------------*/}
            <p>doctor@iuma.com</p>
          </div><br />
          <div className="flex space-x-2">
            <div className="p-2 border-solid border w-fit border-slate-500 rounded-full">Emotional intelligence</div>
            <div className="p-2 border-solid border w-fit border-slate-500 rounded-full">Attention to detail</div>
            <div className="p-2 border-solid border w-fit border-slate-500 rounded-full">Professionalism</div>
          </div><br />
          <div className="max-w-lg">
            <p>officia ea officia elit incididunt ipsum est sed amet ullamco ea enim laboris consequat enim irure elit commodo. exercitation qui laborum ut aliqua anim dolor enim adipiscing nisi anim consectetur reprehenderit voluptate laboris laborum ea commodo. ex lorem velit elit aliquip eiusmod deserunt ad Excepteur sit sed nisi ipsum occaecat id eiusmod aliquip. et adipiscing adipiscing ullamco amet dolor velit elit deserunt consequat sunt mollit velit aliqua ex sit sit. eiusmod ea consequat labore velit deserunt adipiscing ex ipsum id velit ipsum sed dolor labore anim aute.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
