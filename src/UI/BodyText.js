import React from "react";

function BodyText({children}) {
  return (
    <p className="text-text-grey font-normal text-md tracking-wide my-2">
      {children}
    </p>
  );
}

export default BodyText;
