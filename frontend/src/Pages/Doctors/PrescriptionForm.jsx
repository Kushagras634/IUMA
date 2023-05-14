import React, { useState } from "react";

const PrescriptionForm = () => {
  const tableRow = () => {
    return (
      <tr>
        <td>1</td>
        <td>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="medicine_name"
          />
        </td>
        <td>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="strength"
          />
        </td>
        <td>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="dosage"
          />
        </td>
        <td>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="dose"
          />
        </td>

        <td>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="frequency"
          />
        </td>
        <td>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="duration"
          />
        </td>
        <td>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </td>
        <td>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Remove
          </button>
        </td>
      </tr>
    );
  };

  const [prescription, setPrescription] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrescription({ ...prescription, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(prescription)
  }

  const addRow = () => {};

  return (
    <div className="container flex-col bg-white rounded-md my-2 p-2 ">
      <h5 className="text-lg font-semibold">Prescription Form</h5>
      <div className="flex justify-between ">
        <div class="w-full m-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Patient's Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={prescription.name || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="dob"
            value={prescription.dob || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Prescription Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            BMI
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="bmi"
            value={prescription.bmi || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Temperature
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="temperature"
            value={prescription.temperature || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
        <div class="w-full m-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Blood Pressure
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="bp"
            value={prescription.bp || ""}
            onChange={handleChange}
            placeholder="Patient's Name"
          />
        </div>
      </div>
      <div className="container flex-col m-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Diagnosis
        </label>
        <textarea
          rows={10}
          cols={30}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="diagnosis"
          value={prescription.diagnosis || ""}
            onChange={handleChange}
          placeholder="Enter the diagnosis"
        />
      </div>
      <table className="table">
        <thead>
          <tr className="uppercase text-gray-600 font-normal text-base text-left ">
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
            <th className="px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-2">
            <td>1</td>
            <td>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="medicine_name"
              />
            </td>
            <td>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="strength"
              />
            </td>
            <td>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="dosage"
              />
            </td>
            <td>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="dose"
              />
            </td>

            <td>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="frequency"
              />
            </td>
            <td>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="duration"
              />
            </td>
            <td>
              <button
                onClick={addRow}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="container flex-col m-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Special Instrruction
        </label>
        <textarea
          rows={5}
          cols={30}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="instructions"
          placeholder="Enter any Special Instruction"
        />
      </div>
      <div>
        <button
          type="submit"
          className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
          type="reset"
          className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PrescriptionForm;
