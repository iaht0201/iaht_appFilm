import React from "react";
import PropTypes from "prop-types";
import './button.scss'
export default function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
}
export const OutlineButon = (props) => {
  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};
Button.prototype = {
  onClick: PropTypes.func,
};
