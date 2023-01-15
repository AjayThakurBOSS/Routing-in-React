import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./authentication/auth";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline "
    };
  };
  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/About">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/Products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/LazyLoad">
        LazyLoad
      </NavLink>
      <NavLink style={navLinkStyles} to="/Profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
