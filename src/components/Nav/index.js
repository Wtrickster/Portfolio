import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: white;
    font-size: 1.5rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      color: black;
    }
  }
`;

function Nav() {
  return (
    <NavUnlisted>
        <NavLink to="/About" className={window.location.pathname === "/About" ? "nav-item nav-link active" : "nav-item nav-link"}activeClassName="current" exact>
          <li>Home</li>
        </NavLink>
        <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-item nav-link active" : "nav-item nav-link"}activeClassName="current" exact>
          <li>Portfolio</li>
        </NavLink>
        <NavLink to="/contact" className={window.location.pathname === "/contact" ? "nav-item nav-link active" : "nav-item nav-link"}activeClassName="current" exact>
          <li>Contact</li>
        </NavLink>
    </NavUnlisted>
  );
}
export default Nav;