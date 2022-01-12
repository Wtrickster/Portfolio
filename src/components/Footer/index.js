import React from "react";
import { Col, Container } from "../Grid";
import Contact from "../Dropdown";

function Footer() {
  return (  
    <footer>
        <Container>
            <Col settings="text-right">
              <Contact />
            </Col>
            <Col settings="text-center">
              <span className="copyright">Copyright &copy; 2021 Wtrickster</span>
            </Col>
        </Container>
      </footer>
  );
}

export default Footer;