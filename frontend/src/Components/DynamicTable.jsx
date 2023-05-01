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
  const headers = Object.keys(data[0]);

  return (
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            {title !== "" ? (
              <Typography variant="h4" color="inherit">
                {title}
              </Typography>
            ) : (
              <div></div>
            )}

            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th
                      scope="col"
                      key={idx}
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((emp, index) => (
                  <tr key={index}>
                    {headers.map((header, idx) =>
                      typeof emp[header] === "object" ? (
                        <td
                          key={idx}
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          <IconButton>{emp[header]}</IconButton>
                        </td>
                      ) : (
                        <td
                          key={idx}
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
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
