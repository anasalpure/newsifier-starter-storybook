import React from "react";

export const Button: React.FC = ({ children }) => {
  return (
    <button
      className="px-4 py-2 font-bold rounded bg-lightGray hover:text-primary-400"
    >
      {children}
    </button>
  );
};
