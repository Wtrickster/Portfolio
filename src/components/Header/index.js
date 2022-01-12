import React from "react";
import { Col, Row, Container } from "../Grid";
import Title from "../Title";
import Nav from "../Nav";


function Header() {
  return (
    <header>
      <Container className="shadow-box-example z-depth-5">
        <Row >
          <Col>
            <Title />
          </Col>
          <Col>
            <Nav />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;