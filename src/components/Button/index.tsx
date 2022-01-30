// import { useAmp } from "next/amp";
// use ampFor example should come from the button controller
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";
import { IButtonViewProps } from "../../lib/models";
import React from "react";

const buttonVariant = {
  primary: `
    bg-buttonPrimary text-white focus-visible:ring-buttonPrimary
  `,
  secondary: `
    bg-buttonSecondary text-white focus-visible:ring-buttonSecondary
  `,
  error: `
    bg-error text-white focus-visible:ring-error
  `,
  disabled: `
    bg-gray-400 text-white cursor-not-allowed focus-visible:ring-lightGray
  `,
  custom: ``,
};

export const Button = ({
  type = "submit",
  variant = "primary",
  loading,
  disabled,
  children,
  padding,
  colors,
  className,
  style,
  onClick,
}: IButtonViewProps): JSX.Element => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        variant === "custom"
          ? className
          : `inline-flex items-center justify-center ${padding ?? "px-4 py-2"} 
          border border-transparent rounded-md 
          hover:bg-opacity-75 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          transition-all duration-300
          ${colors ?? buttonVariant[variant]}
          ${className}`
      }
    >
      {loading && (
        <span className="mr-2 animate-spin">
          <FontAwesomeIcon icon={faCircleNotch} />
        </span>
      )}
      {children}
    </button>
  );
};


