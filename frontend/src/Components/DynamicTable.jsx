import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function DataTable({ title, data }) {
  console.log(title,)
  const headers = Object.keys(data[0]);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            {title !== "" ? (
              <Typography variant="h4" color="inherit">
                {title}
              </Typography>
            ) : (
              <div></div>
            )}

            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th
                      scope="col"
                      key={idx}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((emp, index) => (
                  <tr key={index}>
                    {headers.map((header, idx) =>
                      typeof emp[header] === "object" ? (
                        <td
                          key={idx}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          <IconButton>{emp[header]}</IconButton>
                        </td>
                      ) : (
                        <td
                          key={idx}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                          {emp[header]}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

DataTable.defaultProps = {
  title: "",
};

export default DataTable;
