import React from "react";
// import required modules
import { Col, Row, Container, Reach } from "../Grid";
// import images
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Resume from "../../assets/resume.png";
import Upwork from "../../assets/upwork.png";
// import resume download
import MyResume from "../../assets/Joseph Penland Resume.pdf"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"

function Contact() {
  return (
    <>
        <Container settings="color ">
          <Row>
            <Col>
              <h3 className="text-center">Contact</h3>
              <Row>
                <Col settings= "e text-center">
                  <a href="https://www.linkedin.com/in/joseph-penland-148889146/" target="_blank" rel="noopener noreferrer">
                    <Reach source={Linkedin} />
                  </a>
                </Col>
                <Col settings= "e text-center">
                  <a href="https://github.com/Wtrickser/" target="_blank" rel="noopener noreferrer">
                    <Reach source={Github} />
                  </a>
                </Col>
              </Row>
              <Row>
                <Col settings= "e text-center">
                  <a href="https://www.upwork.com/freelancers/~01091804af69c258bf/" target="_blank" rel="noopener noreferrer">
                    <Reach source={Upwork} />
                  </a>
                </Col>
                <Col settings= "e text-center">
                  <a href={MyResume} download="Joseph Penland Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Reach source={Resume} />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Contact;

