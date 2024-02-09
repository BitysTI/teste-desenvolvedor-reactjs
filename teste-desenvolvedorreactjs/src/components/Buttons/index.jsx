import React from "react";
import { Button } from "reactstrap";

function CustomButton(props) {
  return (
    <div>
      <Button color="primary">{props.children}</Button>
    </div>
  );
}

export default CustomButton;
