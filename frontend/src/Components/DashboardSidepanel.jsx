import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const DashboardSidepanel = ({ values }) => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#003049",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {values.map((text, index) => (
        <ListItem key={index} sx={{ margin: "0rem .2rem" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "30px" }}>
              {index % 2 === 0 ? (
                <InboxIcon sx={{ color: "white" }} />
              ) : (
                <MailIcon sx={{ color: "white" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem
        sx={{
          bottom: 0,
          top: "auto",
          position: "absolute",
          backgroundColor: "#003049",
          color: "white",
        }}
      >
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: "30px" }}>
            <InboxIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default DashboardSidepanel;
