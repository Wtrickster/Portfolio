import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";
import Linkedin from "../assets/Lin.png";
import Github from "../assets/ghub.png";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import Resume from "../assets/resume.png";
import MyResume from "../assets/Joseph Penland Resume.pdf"

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
              <div className= "row">
                <div className= "col-lg-6 text-center">
                  <a href="https://www.linkedin.com/in/joseph-penland-148889146/"><img src={Linkedin} alt="Linkedin"/></a>
                  <p>Linkedin</p>
                </div>
                <div className= "col-lg-6 text-center">
                    <img src={Email} alt="Email"/>
                    <p>Email: JSPenland97@gmail.com</p>
                </div>
                <div className= "row">
                  <div className= "col-lg-6 text-center">
                    <a href="https://github.com/Wtrickser/"><img src={Github}  alt="Github"/></a>
                    <p>Github</p>
                   </div>
                   <div className= "col-lg-6 text-center">
                    <img src={Phone} alt="Phone"/>
                    <p>Phone: (773)266-9667</p>
                </div>
                </div>
              </div>
              <div className= "row">
              </div>
              <div className= "row">
              <div className= "col-lg-12 text-center">
                    <a href={MyResume} download="Joseph Penland Resume.pdf"><img src={Resume} alt="Resume"/></a>
                    <p>Resume</p>
                </div>
              </div>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;