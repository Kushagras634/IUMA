import React, { useState } from "react";

const PrescriptionForm = () => {
  // const tableRow = () => {
  //   return (
  //     <tr>
  //       <td>1</td>
  //       <td>
  //         <input
  //           className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //           type="text"
  //           name="medicine_name"
  //         />
  //       </td>
  //       <td>
  //         <input
  //           className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //           type="text"
  //           name="strength"
  //         />
  //       </td>
  //       <td>
  //         <input
  //           className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //           type="text"
  //           name="dosage"
  //         />
  //       </td>
  //       <td>
  //         <input
  //           className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //           type="text"
  //           name="dose"
  //         />
  //       </td>

  //       <td>
  //         <input
  //           className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //           type="text"
  //           name="frequency"
  //         />
  //       </td>
  //       <td>
  //         <input
  //           className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //           type="text"
  //           name="duration"
  //         />
  //       </td>
  //       <td>
  //         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  //           Add
  //         </button>
  //       </td>
  //       <td>
  //         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  //           Remove
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // };

  const [prescription, setPrescription] = useState({
    tableData: [
      { id: 1, medicine_name: "", strength: "", dosage: "", dose: "", frequency: "", duration: ""}
    ]
  });
  const [data, setData] = useState(prescription.tableData);

  const handleChange = (e) => {
    // console.log("hello");
    const { name, value } = e.target;
    setPrescription({ ...prescription, [name]: value });
  };

  const handleMediChange = (e) => {
    // console.log("hello");
    const { name, value } = e.target;
    data[data.length-1][name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(prescription)
  }

  const addRow = () => {
    const newRow = { id: 1, medicine_name: "", strength: "", dosage: "", dose: "", frequency: "", duration: "" };
    setData([...data, newRow]);
  };

  return (
    <div className="container flex-col p-2 my-2 bg-white rounded-md ">
      <h5 className="text-lg font-semibold">Prescription Form</h5>
      <div className="flex justify-between ">
        <div class="w-full m-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Patient's Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={prescription.name || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Date of Birth
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="date"
            name="dob"
            value={prescription.dob || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Prescription Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="date"
            name="prescriptionDate"
            value={prescription.prescriptionDate || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
      </div>
      <div className="flex justify-between ">
        <div class="w-full m-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            BMI
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="number"
            name="bmi"
            value={prescription.bmi || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Temperature
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="number"
            name="temperature"
            value={prescription.temperature || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Blood Pressure
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="number"
            name="bp"
            value={prescription.bp || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
      </div>
      <div className="container flex-col m-2">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Diagnosis
        </label>
        <textarea
          rows={10}
          cols={30}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="diagnosis"
          value={prescription.diagnosis || ""}
            onChange={handleChange}
          placeholder="Enter the diagnosis"
        />
      </div>
      <table className="table">
        <thead>
          <tr className="text-base font-normal text-left text-gray-600 uppercase ">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Medicine Name</th>
            <th className="px-4 py-2">
              Strength <br /> (MG)
            </th>
            <th className="px-4 py-2">
              Dosage form <br /> (Tabs , Caps Or Liquid)
            </th>
            <th className="px-4 py-2">
              Dose <br /> (One Tab Or 10ml of Liq)
            </th>
            <th className="px-4 py-2">
              Frequency <br /> (Once a day or every 4 hrs)
            </th>
            <th className="px-4 py-2">
              Duration <br /> (For 10 days)
            </th>
            <th className="px-4 py-2">Add</th>
            {/* <th className="px-4 py-2">Remove</th> */}
          </tr>
        </thead>
        <tbody>
            {data.map((row) => (
              <tr className="m-2">
                <td>{row.id}</td>
                <td><input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  name="medicine_name"
                  onChange={handleMediChange}
                  // value={row.medicine_name || ""}
                /></td>
                <td>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="strength"
                    // value={row.strength || ""}
                    onChange={handleMediChange}
                  />
                </td>
                <td>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="dosage"
                    // value={row.dosage || ""}
                    onChange={handleMediChange}
                  />
                </td>
                <td>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="dose"
                    // value={row.dose || ""}
                    onChange={handleMediChange}
                  />
                </td>
                <td>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="frequency"
                    // value={row.frequency || ""}
                    onChange={handleMediChange}
                  />
                </td>
                <td>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="duration"
                    // value={row.duration || ""}
                    onChange={handleMediChange}
                  />
                </td>
              </tr>
            ))}
          <tr>
            <td>
              <button
                onClick={addRow}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="container flex-col m-2">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Special Instruction
        </label>
        <textarea
          rows={5}
          cols={30}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="instructions"
          placeholder="Enter any Special Instruction"
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="reset"
          className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PrescriptionForm;
