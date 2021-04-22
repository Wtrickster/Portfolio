import React from "react";
import { Col, Row, Container } from "../Grid";
import Title from "../Title";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <Container>
        <Row settings="align-items-center">
          <Col settings="col-md-6">
            <Title />
          </Col>
          <Col settings="col-md-6">
            <Nav />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;