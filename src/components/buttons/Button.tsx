import React from "react";

interface ButtonProps {
  text: string;
  btnClass: "secondary" | "primary";
  type: "button" | "submit" | "reset";
  onClick?: any;
  fullWidth?: boolean;
}

export const Button = ({
  type,
  text,
  btnClass,
  onClick,
  fullWidth,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      type={type}
      className={`${btnClass === "primary" ? "btn-primary" : "btn-secondary"} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {text}
    </button>
  );
};
