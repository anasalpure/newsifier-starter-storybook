import React from "react";

export const Button: React.FC = ({ children }) => {
  return (
    <button className="inline-flex items-center justify-center px-4 py-2 text-white transition-all duration-300 border border-transparent rounded-md bg-buttonPrimary focus-visible:ring-buttonPrimary hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
      {children}
    </button>
  );
};
