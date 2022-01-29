import React from "react";

export const Button: React.FC = ({ children }) => {
  return (
    <button
      className="inline-flex items-center justify-center px-4 py-2 
  border border-transparent rounded-md 
  hover:bg-opacity-75 
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  transition-all duration-300
  
bg-buttonPrimary text-white focus-visible:ring-buttonPrimary

  w-full bg-lightGray text-white focus-visible:ring-lightGray"
    >
      {children}
    </button>
  );
};
