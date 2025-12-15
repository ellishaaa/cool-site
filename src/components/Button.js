import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--secondary", "submit-btn"];

const SIZES = ["btn--medium", "btn--large", "btn--xlarge"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
  to,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  const classes = `btn ${checkButtonStyle} ${checkButtonSize}${
    className ? ` ${className}` : ""
  }`;

  if (to) {
    return (
      <Link to={to} className="btn-mobile" onClick={onClick}>
        <button className={classes} type={type}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
};