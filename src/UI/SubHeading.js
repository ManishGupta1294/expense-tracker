import React from "react";

function SubHeading(props) {
  return (
    <p className={`${props.cssClass} font-semibold text-lg tracking-wide>`}>
      {props.title}
    </p>
  );
}

export default SubHeading; 
