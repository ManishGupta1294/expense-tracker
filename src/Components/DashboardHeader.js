import React, { useState, useContext, useEffect } from "react";
import SubHeading from "../UI/SubHeading";
import IconButton from "@mui/material/IconButton";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import { UserInfo } from "../Context/UserInfo";

function DashboardHeader() {
  const { user, logout } = useContext(UserInfo);
  const [greetingMessage, setGreetingMessage] = useState("");
  const [initials, setInitials] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  const greetings = () => {
    const date = new Date();
    let hour = date.getHours();
    if (hour < 12) {
      setGreetingMessage("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreetingMessage("Good Afternoon");
    } else {
      setGreetingMessage("Good Evening");
    }
  };

  useEffect(() => {
    greetings();
    getNameInitials();
  }, []);

  const getNameInitials = () => {
    if (user && user.name) {
      let name = user.name.split(" ");
      let initials = name.map((part) => part[0]).join("");
      setInitials(initials.toUpperCase());
    }
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white border-b-3 border-main-grey px-4 py-2">
        <div className="flex gap-2 items-center text-medium-blue">
          <SubHeading
            title={`${greetingMessage}, ${
              user ? user.name : localStorage.getItem("userEmail") || "User"
            }...`}
            cssClass="text-medium-blue"
          />
          <WavingHandOutlinedIcon />
        </div>
        <div>
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar
              sx={{ bgcolor: "#2398F8", fontSize: "16px", fontWeight: "bold" }}
            >
              {initials}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                width: "150px",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
                borderRadius: "15px",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 25,
                  height: 25,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>

            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <span className="-ml-2">Logout</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
