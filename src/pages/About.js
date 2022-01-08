import React from "react";
import {Col, Container } from "../components/Grid";
import Section from "../components/Section";
import Joseph from "../assets/Joseph.png"

function About() {
  return (
    <Container>
          <Section>
              <Col>
                  <img src={Joseph} className="img-fluid round" alt="Joseph"/>
              </Col>
              <Col>
                <h3>
                  About
                </h3>
                <Col> 
                  Web Developer and tech enthusiast. Trained at the University of Richmond Coding Bootcamp and earned a Certificate in Full Stack Web Development. Experienced with web development languages/libraries like JavaScript, Python, CSS, HTML, jQuery, Bootstrap, Node.js, Express, MySQL, MongoDB, Handlebar, Sequelize, and integrating APIs.
                </Col>
                <Col>
                  Extremely organized, conflict resolution, self-motivated, strong verbal communication, and very personable. Always independently studying new methods and technologies.
                </Col>
                <Col>
                  A team player that can also work independently, constantly educating myself on new skills, and always ready for the challenge. Excited to start a new career in technology.
                </Col>
              </Col>
          </Section>
    </Container>
  );
}

export default About;