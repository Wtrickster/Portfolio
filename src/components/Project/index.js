// Imports
import React from 'react';
import { Col, Row } from "../Grid";

// Create and export project card component
export default function Project(props) {
  return (
    <Row>  
      <Col>
        <img src={props.thumbnail} alt="" className="round" />
      </Col>
      <Col>
          <h3>{props.title}</h3>
        <Row>
          <p>{props.description}</p>
        </Row>
        <Row>
          <li><a href={props.app}>Deployed Page</a></li>
        </Row>
        <Row>
          <li><a href={props.repo}>Github</a></li>
        </Row>
      </Col>
    </Row>
  );
}