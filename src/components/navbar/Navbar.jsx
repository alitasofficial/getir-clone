import React from "react";
import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import NavbarButton from "./NavbarButton";

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
    to: "more",
    label: "more",
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
    <div className="sticky top-0 bg-color-getir-navbar text-xl">
      <div className="wrapper mx-auto flex max-w-6xl items-center justify-between">
        {/* Nav Links */}
        <nav>
          <ul className="flex gap-2 text-base font-semibold text-color-getir-navbar-text">
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
          <NavbarButton>
            <TfiWorld size={16} /> English (EN)
          </NavbarButton>
          <NavbarButton>
            <BsPersonFill /> Login
          </NavbarButton>
          <NavbarButton>
            <BsPersonPlusFill /> Signup
          </NavbarButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
