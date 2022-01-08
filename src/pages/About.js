import React from "react";
import {Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";
import Joseph from "../assets/Joseph.png"

function About() {
  return (
    <Container>
      <Section>
        <Row>
          <Col settings= "text-center">
            <img src={Joseph} className="round headshot" alt="Joseph"/>
          </Col>
          <Col>
              <h3>About</h3>
            <Row>
              <p>
                Web Developer and tech enthusiast. Trained at the University of Richmond Coding Bootcamp and earned a Certificate in Full Stack Web Development. Experienced with web development languages/libraries like JavaScript, Python, CSS, HTML, jQuery, Bootstrap, Node.js, Express, MySQL, MongoDB, Handlebar, Sequelize, and integrating APIs.
              </p>
            </Row>
            <Row>
              <p>
                Extremely organized, conflict resolution, self-motivated, strong verbal communication, and very personable. Always independently studying new methods and technologies.
              </p>
            </Row>
            <Row>
              <p>
                A team player that can also work independently, constantly educating myself on new skills, and always ready for the challenge. Excited to start a new career in technology.
              </p>
            </Row>
          </Col>
        </Row>
      </Section>
    </Container>
  );
}

export default About;