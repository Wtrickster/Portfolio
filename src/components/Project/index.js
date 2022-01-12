// Imports
import React from 'react';
import {Col, Row} from "../Grid";
import Block from "../Block";

// Create and export project card component
export default function Project(props) {
  return (
    <Block
      label={<div className="down">{props.title}</div>}
      onOpen={() => console.log("")}
    >
      <Row>
          <Col settings= "text-center">
            <img src={props.thumbnail} alt="" className="round project" />
          </Col>
          <Col> 
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
    </Block>
  );
}