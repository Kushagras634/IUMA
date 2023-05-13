import React from "react";
import { useNavigate } from "react-router-dom";

const PatientsCards = ({ name, type, timing }) => {
  const navigate = useNavigate()
  return (
    <div className="cursor-pointer select-none flex items-center justify-between border-lightGrey border-2 bg-white p-2"
      onClick={()=>navigate('/dashboard/verifyPatient')}
    >
      <div>
        <p className=" font-normal text-lg">{name}</p>
        <p className=" uppercase text-sm font-thin">{type}</p>
      </div>
      <p className=" font-semibold text-3xl">{timing}</p>
    </div>
  );
};

export default PatientsCards;
