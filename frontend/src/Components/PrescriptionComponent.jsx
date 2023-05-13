import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



const Prescription = ({ patientDetails, doctorDetails, medicines, total }) => {

  return (
    <div class="flex flex-wrap ">
        <div class="md:w-full pr-4 pl-4">
            <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                <div class="flex-auto p-6">
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 flex justify-between">
                        <div class="lg:w-1/4 pr-4 pl-4 ps-0">
                            <a href="#" class="noble-ui-logo block mt-3">Dr. Jhon Doe</a>
                            <p class="mt-1 mb-1"><b>M.B.B.S, M.D., M.S. (Reg. No.: BD52286 )</b></p>
                            <p>Mob.:+91 9876543210</p>
                            <h5 class="mt-6 mb-2 text-gray-700"><b>Ajay Nagar (M) / 24 Y</b></h5>
                            <p> <b> Address :</b> ALiganj, Lucknow</p>
                            <p><b>Weight(kg):</b> 58, <b>Height(cms):</b> 130, <b>BP:</b> 120/80 mmHg</p>
                        </div>
                        <div class="lg:w-1/4 pr-4 pl-4 pe-0">
                            <h4 class="fw-bold uppercase noble-ui-logo text-end mt-4 mb-2">Clinic Name</h4>
                            <h6 class="text-end ">Near Mama Chauraha, Aliganj, Lucknow</h6>
                            <p class="text-end"><b>Ph.: +91 9876543210 </b></p>
                            <p class="text-end mb-3 pb-4"><b>Timing: 10:00 AM to 02:00 PM</b></p>
                            <p class="text-end mb-1"><b>Date: 02-Jan-2023, 03:26 PM</b></p>
                        </div>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-4 flex justify-center w-full">
                        <div class="block w-full overflow-auto scrolling-touch w-full">
                            <table class="w-full max-w-full mb-4 bg-transparent table-bordered">
                                <thead>
                                    <tr>
                                        <th>Cheif Complaints</th>
                                        <th class="text-end">Clinical Findings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-end">
                                        <td class="text-start">* Acidity (2 days)</td>
                                        <td>* Demo Finding 1</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-4 w-full">
                        <p><b>Notes: </b></p>
                        <p>Sample Internal Notes</p>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-4 w-full">
                        <p><b>Diagnosis: </b></p>
                        <p>Sample Diagnosis</p>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-4 w-full">
                        <p><b>Procedures Conducted: </b></p>
                        <p>Sample Procedures</p>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-5 flex justify-center w-full">
                        <div class="block w-full overflow-auto scrolling-touch w-full">
                            <table class="w-full max-w-full mb-4 bg-transparent table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Medicine Name</th>
                                        <th class="text-end">Dosage</th>
                                        <th class="text-end">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-end">
                                        <td class="text-start">1</td>
                                        <td class="text-start">Tab. Demo Medicine 1</td>
                                        <td>1 Morning, 1 Night <br/> (Before Food)</td>
                                        <td>8 Days <br/> (Tot. 20 Tabs)</td>
                                    </tr>
                                    <tr class="text-end">
                                        <td class="text-start">2</td>
                                        <td class="text-start">Tab. Demo Medicine 2</td>
                                        <td>1 Morning, 1 Night <br/> (Before Food)</td>
                                        <td>8 Days <br/> (Tot. 20 Tabs)</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-4 w-full">
                        <p><b>Investigations: </b></p>
                        <ul>
                            <li>X-Ray</li>
                            <li>P-53</li>
                        </ul>
                    </div>
                    <div class="containermax-w-fullmt-4 w-full">
                        <p><b>Advice Given: </b></p>
                        <ul>
                            <li>Avoid Oily and Spicy Food</li>
                        </ul>
                    </div>
                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 flex flex-col items-end">
                      <p class="h5">Dr. Jhon Dow</p>
                      <p class="h6 ">M.B.B.S, M.D., M.S.</p>
                    </div>

                    <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 w-full">
                        <a href="javascript:;" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600  mt-4 ms-2"><i data-feather="send"
                                class="me-3 icon-md"></i>Send Prescription</a>
                        <a href="javascript:;" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600 mt-4"><i data-feather="printer"
                                class="me-2 icon-md"></i>Print</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Prescription;


