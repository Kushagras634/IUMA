import React, { useContext, useEffect, useState } from "react";
import PatientsCards from "../../Components/PatientsCards";
import profileImg from "../../assets/profile.jpg";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const { id } = useContext(GlobalContext);

  useEffect(() => {
    const handleCall = async () => {
      let url = "http://localhost:8000/appointment/getAppointments";
      console.log(url);
      const { data } = await axios.post(url, { id });
      if (data === "Error") {
        return;
      }
      console.log(data);
      setAppointments(data)
    };
    handleCall();
    // console.log(testResults);
  }, []);

  return (
    <div className="conatiner my-2 w-full">
      <div className="flex">
        <div className="bg-white w-1/3 max-h-[85vh] bg-scroll overflow-y-auto scroll-smooth">
          <h2 className="p-2">Todays Appointments</h2>
          {
            appointments.map((appoint, idx)=>(
              <PatientsCards key={idx} name={appoint.patientName} type="Consultaion" timing={appoint.time} />
            ))
          }
        </div>
        <div className="bg-white w-1/3 px-2 mx-2">
          <h2 className="p-2">Revenue</h2>
          <div className="flex justify-evenly py-4">
            <div>
              <p className=" font-medium text-4xl">₹3,204</p>
              <p>This Month</p>
            </div>
            <div>
              <p className=" font-medium text-4xl">₹892</p>

              <p>This Week</p>
            </div>
          </div>
          <div className="flex ">
            <div className="rounded-md m-1 bg-blue-200 w-fit text-center p-2 ">
              <p className="text-4xl">52</p>
              <p className="">Number of patients this week</p>
            </div>
            <div className="rounded-md m-1 bg-blue-200 w-fit text-center p-2 ">
              <p className="text-4xl">300</p>
              <p className="">Number of patients this month</p>
            </div>
          </div>
        </div>
        <div className="shrink px-5 w-1/3 bg-white mx-2 flex flex-col items-center p-2">
          <div className="border-solid border-2 w-fit border-white rounded-full">
            {/* --------------- add image of a doctor-------------------- */}
            <span className="relative inline-block">
              <img
                className=" h-40 w-40 rounded-full"
                src={profileImg}
                alt="Dan_Abromov"
              />
              <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-600 ring-2 ring-white"></span>
            </span>
          </div>
          <br />
          <div>
            {/* --------------- add name of a doctor from session or backend-------------------- */}
            <p className="text-2xl font-semibold">Dr. Joshi</p>
            {/*-------------------------Enter the email from the session or backend-----------------------*/}
            <p>doctor@iuma.com</p>
          </div>
          <br />
          <div className="flex space-x-2 ">
            <div className="p-2 border-solid border w-fit border-slate-500 rounded-full">
              Emotional intelligence
            </div>
            <div className="p-2 border-solid border w-fit border-slate-500 rounded-full">
              Attention to detail
            </div>
            <div className="p-2 border-solid border w-fit border-slate-500 rounded-full">
              Professionalism
            </div>
          </div>
          <br />
          <div className="max-w-lg">
            <p>
              officia ea officia elit incididunt ipsum est sed amet ullamco ea
              enim laboris consequat enim irure elit commodo. exercitation qui
              laborum ut aliqua anim dolor enim adipiscing nisi anim consectetur
              reprehenderit voluptate laboris laborum ea commodo. ex lorem velit
              elit aliquip eiusmod deserunt ad Excepteur sit sed nisi ipsum
              occaecat id eiusmod aliquip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
