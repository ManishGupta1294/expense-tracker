import React from "react";
import Button from "@mui/material/Button";

function Btn(props) {
  return (
    <>
      <Button
        variant="contained"
        startIcon={props.startIcon}
        onClick={props.onClick}
        className={props.cssClass}
        sx={props.sx}
      >
        {props.label}
      </Button>
    </>
  );
}

export default Btn;
