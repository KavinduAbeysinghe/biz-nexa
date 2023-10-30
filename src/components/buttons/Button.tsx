import React from "react";

interface ButtonProps {
  text: string;
  btnClass: "secondary" | "primary";
  type: "button" | "submit" | "reset";
  onClick?: any;
}

export const Button = ({ type, text, btnClass, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={btnClass === "primary" ? "btn-primary" : "btn-secondary"}
    >
      {text}
    </button>
  );
};
