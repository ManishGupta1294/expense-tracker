import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  return (
    <>
      <TextField
        type={props.type}
        label={props.label}
        variant="outlined"
        size="small"
        value={props.value}
        onChange={props.onChange}
        className={props.cssClass}
        InputProps={{
          endAdornment: props.endAdornment,
        }}
        required={props.required}
      />
    </>
  );
}

export default InputField;
