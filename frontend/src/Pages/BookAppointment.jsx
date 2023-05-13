import React, { useContext, useEffect, useState, useRef } from "react";
import HeaderComponent from "../Components/HeaderComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import docMale from "../assets/doc_male.jpg";
import docFemale from "../assets/doc_female.avif";
import CardComponent from "../Components/CardComponent";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";

function showToast(message, color, textColor, duration) {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      backgroundColor: color,
      color: textColor,
    },
  });
}


const BookAppointment = () => {
  const { email } = useContext(GlobalContext);

  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [otp, setOtp] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [docData, setDocData] = useState();
  const divRef = useRef(null);

  const navigate = useNavigate()
  

  useEffect(() => {
    // console.log(location)
    if (location.state) {
      const getDoctor = async () => {
        let url = "http://localhost:8000/appointment/getDoc";
        // console.log(location.state);
        const { data } = await axios.post(url, location.state);
        console.log(data);
        setDocData(data);
      };
      getDoctor();
    }
    const newOtp = Math.floor(10000000 + Math.random() * 90000000).toString();
    const newQrValue = uuidv4();
    setQrValue(newQrValue);
    setOtp(newOtp);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your logic for handling the form submission
    const data = {
      patientEmail: email,
      doctorId: docData._id,
      date: date,
      time: time,
      patientName:name, 
      patientPhone:phone,
      status: 'booked'
    }
    // console.log(data)
    // handleDownload();
    handleExportPDF(data);
    let url = "http://localhost:8000/appointment/bookAppointment";
    await axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Appointment Booked") {
          showToast(
            "Appointment Booked Successfull",
            "#23C552",
            "white",
            2000
          );
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));


  };

  const handleDownload = () => {
    const input = document.getElementById("root");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      canvas.width = document.body.clientWidth
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  const handleExportPDF = (data) => {
    // html2canvas(divRef.current).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, "PNG", 0, 0);
    //   pdf.save("div.pdf");
    // });
    console.log(data);
      const pdf = new jsPDF();
      pdf.text('Appointment Details', 70,20);
      pdf.setFontSize(14);
      pdf.text('Name: ', 20, 40);
      pdf.text(data.patientName, 60,40);
      pdf.text('Phone No.: ', 20, 60);
      pdf.text(data.patientPhone, 60, 60);
      pdf.text('Time: ', 20, 80);
      pdf.text(data.time, 60,80);
      pdf.text('Date: ', 20, 100);
      pdf.text(data.date, 60,100);
      pdf.text('Doctor ID: ', 20,120);
      pdf.text(data.doctorId, 60, 120);
      pdf.save("appointment.pdf");
  };

  return (
    <>
      <HeaderComponent />
      <main className="flex justify-evenly items-center gap-4  " id="bookingForm" >
        <form onSubmit={handleSubmit} className="" >
          <h2 className="text-2xl mb-4">Book an Appointment</h2>
          <div className="grid grid-cols-2 gap-3" ref={divRef}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            {qrValue && <QRCode value={qrValue} />}
            <div className="w-1/2">
              <p>Otp</p>
              <p className="text-xl font-bold">{otp}</p>
            </div>
          </div>

          <div className="flex items-center justify-center pt-8">
            <button
              className="bg-sidepanel text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Appointment
            </button>
            
          </div>
        </form>
        {docData && (
          <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
            <div className="h-full w-full md:h-[300px] md:w-[300px]">
              <img
                src={docData.gender === "Male" ? docMale : docFemale}
                alt="Laptop"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  About {docData.fullName}
                </h1>
                <p className="mt-3 text-sm text-gray-600">doc desc</p>
                <div className="mt-4">
                  <p> Gender : {docData.gender} </p>
                  <p>Qualifications : {docData.qualifications}</p>
                  <p>Experience: {docData.yearsOfExperience}</p>
                  <p> Licence Number : {docData.medicalLicenseNumber} </p>
                  <p> Licence Issued By : {docData.licenseIssuingAuthority} </p>
                  <p>Address : {docData.practiceLocation}</p>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default BookAppointment;
