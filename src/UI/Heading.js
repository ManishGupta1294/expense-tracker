import React from "react";

function Heading(props) {
  return (
    <p className={`${props.cssClass} font-semibold text-3xl tracking-wide uppercase`}>
      {props.title}
    </p>
  );
}

export default Heading;
