import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import Contact from "../Dropdown";
import { Container } from "../Grid"

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
    <Container>
    <NavUnlisted>
        <NavLink to="/About" className={window.location.pathname === "/About" ? "nav-item nav-link active" : "nav-item nav-link"}activeClassName="current" exact>
          <li className="underline">Home</li>
        </NavLink>
        <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-item nav-link active" : "nav-item nav-link"}activeClassName="current" exact>
          <li className="underline">Projects</li>
        </NavLink>
    </NavUnlisted>
    <Contact />
    </Container>
  );
}
export default Nav;