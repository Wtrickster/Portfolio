import React from "react";
import { Col, Row, Container } from "../Grid";

function Footer() {
  return (
    <footer>
      <Container>
      <Row settings="text-center">
          <Col>
            <span>Phone: (773)266-9667</span>
          </Col>
          <Col>
            <span>Email: JSPenland97@gmail.com</span>
          </Col>
        </Row>
        <Row settings="text-center">
          <Col settings="text-center">
            <span className="copyright">Copyright &copy; 2021 Wtrickster</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;