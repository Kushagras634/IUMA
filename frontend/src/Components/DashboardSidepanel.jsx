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
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

const DashboardSidepanel = ({ values }) => {
  const navigate = useNavigate();
  return (
    <List className="w-56 flex flex-col text-white h-screen align-middle top-0 left-0 fixed bg-sidepanel" >
      <img src={logo} alt="" className="w-1/3 py-2 self-center mb-6" />
      {values.map((text, index) => (
        <ListItem key={index} className="my-1">
          <ListItemButton href={text.url}>
            <ListItemIcon className="w-1/5" >
              {index % 2 === 0 ? (
                <InboxIcon className="text-white" />
              ) : (
                <MailIcon className="text-white" />
              )}
            </ListItemIcon>
            <ListItemText primary={text.name} />
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
