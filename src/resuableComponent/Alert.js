import React from "react";

const Alert = (props) => {
  return (
    <div>
      {/* <div class={`alert ${props.className}`}>
        <strong>{props.alertType}!</strong> {props.message}
      </div> */}
      <div class={`alert ${props.className}`} style={{'background-color':props.backColor}}>
        <strong>{props.alertType}!</strong> {props.message}
      </div>
    </div>
  );
};

export default Alert;
