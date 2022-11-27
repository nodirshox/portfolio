import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import property from "../../Assets/Projects/property.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              title="eCommerce"
              description="In this project I build eCommerce backend system using microservices."
              link="https://github.com/nodirshox/ecommerce-microservices"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={property}
              title="Property Rental"
              description="In this project I build Rental Property Service using Spring Boot."
              link="https://github.com/nodirshox/waa-final-project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
