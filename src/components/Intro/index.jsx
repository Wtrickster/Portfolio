import React from "react";
import { Col, Row, Container, Img } from "../Grid";
import Joseph from "../../assets/Joseph.png"

function Intro() {
  return (
    <Container settings="color">
      <Row>
        <Col settings= "d-flex align-items-center justify-content-center">
          <Img source={Joseph} />
        </Col>
        <Col>
          <h3>About</h3>
          <Row settings="text">
            <p>
              Web Developer and tech enthusiast. Trained at the University of Richmond Coding Bootcamp and earned a Certificate in Full Stack Web Development. Experienced with web development languages/libraries like JavaScript, Python, CSS, HTML, jQuery, Bootstrap, Node.js, Express, MySQL, MongoDB, Handlebar, Sequelize, and integrating APIs.
            </p>
            <p>
              Extremely organized, conflict resolution, self-motivated, strong verbal communication, and very personable. Always independently studying new methods and technologies.
            </p>
            <p>
              A team player that can also work independently, constantly educating myself on new skills, and always ready for the challenge. Excited to start a new career in technology.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;