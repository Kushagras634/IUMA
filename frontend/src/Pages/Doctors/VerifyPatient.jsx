import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const VerifyPatient = () => {
  const [scanData, setScanData ] = useState()

  const handleError = (err) => {
    console.log(err)
  }

  const handleScan = (data) => {
    // console.log(data)
    if(data!=null)
      setScanData(data.text)
  }

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
        <p>{scanData}</p>
      </div>
    </div>
  );
};

export default VerifyPatient;
