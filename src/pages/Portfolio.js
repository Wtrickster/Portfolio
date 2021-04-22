import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Project from '../components/Project';

// Import data (TEMP)
import { data } from '../data';

// Create and export Portfolio page component
export default function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          {data.map((project, index) => {
            return (
              <Project
                id={index}
                key={index}
                title={project.title}
                thumbnail={project.thumbnail}
                description={project.description}
                app={project.app}
                repo={project.repo}
              />
            )
          })}
        </Col>
      </Row>
    </Container>
  );
}