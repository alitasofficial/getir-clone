import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    to: "/",
    label: "",
    getir: "getir",
  },
  {
    to: "food",
    label: "food",
    getir: "getir",
  },
  {
    to: "big",
    label: "big",
    getir: "getir",
  },
  {
    to: "water",
    label: "water",
    getir: "getir",
  },
];

const Navbar = () => {
  return (
    <div className="bg-color-getir-primary text-xl">
      <div className="container mx-auto flex max-w-6xl items-center justify-between">
        {/* Nav Links */}
        <nav>
          <ul className="flex gap-2 text-base font-semibold text-color-getir-gray-blue">
            {navLinks.map(({ to, label, getir }) => (
              <li key={label} className="">
                <NavLink to={to}>
                  {({ isActive }) => (
                    <div
                      className={`mt-1 rounded-t py-2 px-4 ${
                        isActive ? "bg-color-getir-secondary" : undefined
                      } `}
                    >
                      <span
                        className={
                          isActive ? "text-color-getir-brand-yellow" : undefined
                        }
                      >
                        {getir}
                      </span>
                      <span>{label}</span>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Account Info */}
        <div className="flex gap-7 text-base font-semibold text-color-getir-gray-blue">
          <button className="font-normal">English(EN)</button>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
