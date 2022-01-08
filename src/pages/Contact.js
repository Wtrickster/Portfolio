
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Email from "../assets/gmail.png";
import Phone from "../assets/phone.png";
import Resume from "../assets/resume.png";
import Upwork from "../assets/upwork.png";

import MyResume from "../assets/Joseph Penland Resume.pdf"

function Contact() {
  return (
    <Container>
          <Section>
            <Row>
              <Col settings= "text-center">
                <a href="https://www.linkedin.com/in/joseph-penland-148889146/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} className="size" alt="Linkedin"/></a>
                <p>Linkedin</p>
              </Col>
              <Col settings= "text-center">
                <img src={Email} className="size" alt="Email"/>
                <p>JSPenland97@gmail.com</p>
              </Col>
            </Row>
            <Row>
              <Col settings= "text-center">
              <a href={MyResume} download="Joseph Penland Resume.pdf"><img src={Resume} className="size" alt="Resume"/></a>
                <p>Resume</p>
              </Col>
              <Col settings= "text-center">
              <a href="https://www.upwork.com/freelancers/~01091804af69c258bf/" target="_blank" rel="noopener noreferrer"><img src={Upwork} className="size" alt="Upwork"/></a>
                <p>Upwork</p>
              </Col>
            </Row>
            <Row>
              <Col settings= "text-center">
                <a href="https://github.com/Wtrickser/" target="_blank" rel="noopener noreferrer"><img src={Github} className="size" alt="Github"/></a>
                <p>Github</p>
              </Col>
              <Col settings= "text-center">
                <img src={Phone} className="size" alt="Phone"/>
                <p>(773)266-9667</p>
              </Col>
            </Row>
          </Section>
    </Container>
  );
}

export default Contact;