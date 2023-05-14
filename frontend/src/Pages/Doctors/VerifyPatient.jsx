import React, { useContext, useState } from "react";
import QrReader from "react-qr-scanner";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";

const VerifyPatient = () => {
  const [scanData, setScanData] = useState();
  const [otp, setOtp] = useState("");
  const { id } = useContext(GlobalContext)
  const [result, setResult] = useState(null)

  const navigation = useNavigate()

  const handleError = (err) => {
    console.log(err);
  };

  const handleScan = (data) => {
    // console.log(data)
    if (data != null) setScanData(data.text);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const temp = {
      qr: scanData,
      otp: otp,
      id: id
    };
    console.log(temp);
    let url = "http://localhost:8000/appointment/verifyAppointment";
    await axios
      .post(url, temp)
      .then((res) => {
        console.log(res.data);
        if(res.data === "Match Found"){
          setResult(true)
        }
        if(res.data === "No Match"){
          setResult(false)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white flex justify-center items-center h-[85vh] w-full my-2">
      <div className="shadow-sm flex flex-col justify-center items-center">
        <h3>Scan QR</h3>
        <QrReader
          delay={100}
          onError={handleError}
          onScan={handleScan}
          className="w-1/2 h-1/2"
        />
        <p className="text-green-500 my-4 ">
          {scanData && `QR Sucessfully Scanned`}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="m-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Otp
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP ..."
            />
          </div>
          <p className="text-red-500 font-medium">{result === false? 'No Match Found or Wrong Entry': ''}</p>
          {result !==true?(<button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>):(
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>navigation('/dashboard/prescriptionForm')}
          >
            Go to Prescription
          </button>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default VerifyPatient;
