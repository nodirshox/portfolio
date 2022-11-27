import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCards";
import Particle from "../Particle";

import friend from "../../Assets/friend.jpg";

function Testimonials() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Testimonial
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <TestimonialCard
              imgPath={friend}
              title="Mansur Allaberdiev"
              description="Nodirbek is very good friend. He always tries to help to everyone. I recommend him as good friend."
              link="https://t.me/mansurallaberdiev"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Testimonials;
