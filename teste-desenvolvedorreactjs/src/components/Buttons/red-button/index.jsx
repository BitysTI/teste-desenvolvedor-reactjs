import React from "react";
import { Button } from "reactstrap";

function RedButton(props) {
  return (
    <div>
      <Button color="danger">{props.children}</Button>
    </div>
  );
}

export default RedButton;
