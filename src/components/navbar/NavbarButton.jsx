import React from "react";

const NavbarButton = ({ children }) => {
  return (
    <button className="flex items-center gap-1 text-sm font-normal text-color-getir-navbar-text">
      {children}
    </button>
  );
};

export default NavbarButton;
