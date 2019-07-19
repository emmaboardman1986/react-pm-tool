import React from "react";
import classes from "./Button.module.css";

const Button = props => (
  <button
    type="props.type"
    data-cy="props.data-cy"
  >
    {props.children}
  </button>
);

export default Button;
