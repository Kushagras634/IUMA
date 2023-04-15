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
    <>
      {title !== "" ? (
        <Typography variant="h4" color="inherit">
          {title}
        </Typography>
      ) : (
        <div></div>
      )}

      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell key={idx} align="center" sx={{fontWeight: '    bold'}} >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((emp, index) => (
            <TableRow key={index}>
              {headers.map((header, idx) =>
                typeof emp[header] === "object" ? (
                  <TableCell key={idx} align="center" sx={{ padding: "5px" }}>
                    <IconButton>{emp[header]}</IconButton>
                  </TableCell>
                ) : (
                  <TableCell key={idx} align="center">
                    {emp[header]}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

DataTable.defaultProps = {
  title: "",
};

export default DataTable;
