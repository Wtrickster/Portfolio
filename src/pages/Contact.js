import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";
import Linkedin from "../assets/Lin.png";
import Github from "../assets/ghub.png";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import Resume from "../assets/resume.png";


function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <div className= "container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-header">
                    <h1>Contact</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className= "row">
                <div className= "col-lg-4 text-center">
                  <a href="https://www.linkedin.com/in/joseph-penland-148889146/"><img src={Linkedin} alt="Linkedin"/>
                    <p>Linkedin</p>
                  </a>
                </div>
                <div className= "col-lg-4 text-center">
                    <a href="https://github.com/Wtrickser/"><img src={Github} alt="Github"/>
                    <p>Github</p>
                    </a>
                </div>
                <div className= "col-lg-4 text-center">
                    <a href="assets/Joseph's_Resume.pdf" download="Joseph's_Resume"><img src={Resume} alt="Resume"/>
                    <p>Resume</p>
                    </a>
                </div>
              </div>
              <div className= "row">
                <div className= "col-lg-6 text-center">
                    <a href="https://github.com/Wtrickser/"><img src={Email} alt="Email"/>
                    <p>Email: JSPenland97@gmail.com</p>
                    </a>
                </div>
                <div className= "col-lg-6 text-center">
                    <a href='https://megapng.com/images/bt/phone-symbol-14.png'><img src={Phone} alt="Phone"/>
                    <p>Phone: (773)266-9667</p>
                    </a>
                </div>
              </div>
            </div>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;