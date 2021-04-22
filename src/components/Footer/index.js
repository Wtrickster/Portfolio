import React from "react";
import { Col, Row, Container } from "../Grid";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col settings="text-center">
            <span className="copyright">Copyright &copy; 2021 Wtrickster</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;