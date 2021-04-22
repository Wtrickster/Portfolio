import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";
import Joseph from "../assets/Joseph.png"

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <Row>
              <div className="col-sm-12 col-lg-6">
                  <img src={Joseph} className="img-fluid self" alt="Joseph"/>
              </div>
              <div className="col-sm-12 col-lg-6">
                  <p> 
                  Hello there, my name is Joseph. I’m Chicago born and raised. Since I was a child I always loved teaching myself new skills; such as woodworking, 3d printing, 3d    modeling, and computer hardware. As a result of this I prefer to make furniture myself to suit my needs rather than shop around for something; with this a yearly tradition I’ve fallen into is making a new desk. I’ve never been one to simply settle which may be why I often find myself in both leadership and supporting roles when it comes to work and friends.
                  </p>
              </div>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;