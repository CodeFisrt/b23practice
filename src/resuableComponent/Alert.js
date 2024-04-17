import React, {memo} from "react";

const Alert = (props) => {
  console.log('Alert Component Loaded');
  return (
    <div>
      <div class={`alert ${props.className}`}>
        <strong>{props.alertType}!</strong> {props.message}
      </div>
    </div>
  );
};

export default memo(Alert);
