import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/cloud.svg";
import resume from "../../Assets/resume.pdf";
import cloud from "../../Assets/cloud.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFilePdf
} from "react-icons/ai";
import Particle from "../Particle";
import { FaLinkedinIn } from "react-icons/fa";
import {Link} from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Skilled Java Software Engineer with 4 years of professional experience developing highly scalable REST API Web Services and other backend solutions.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple">
                  {" "}
                  Java, Node JS and DevOps{" "}
                </b>.
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies and Cloud{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Software Architecture</b>.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Java</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Spring Boot</b>.
              </i>
              <br />
              <br />
              Currently, I am doing Masters in Computer Science at <b className="purple">Maharishi International University</b>. I studied Bachelors of Computer Science at <b className="purple">Inha university in Tashkent</b>.
            </p>
            <p className="home-about-body">
              My skills<br />
              <b>Languages</b>: Java, JavaScript<br />
              <b>Web</b>: HTML5, CSS3, Bootstrap, jQuery, XML, Ajax, Express, Node<br />
              <b>Web Services</b>: AWS S3, AWS RDS, AWS Lambda, Microservices, JSON, SOAP<br />
              <b>Web Servers</b>: AWS EC2, Apache/Tomcat<br />
              <b>Frameworks</b>: Spring (MVC, Boot, Data, Security, AOP, Dependency Injection, Cloud), Hibernate, JPA<br />
              <b>Databases</b>: PostgreSQL, MySQL, MongoDB<br />
              <b>Design Patterns</b>: MVC, Singleton, Prototype, Session, Session Factory, Proxy, Observer, IoC, Dependency Injection, Template<br />
              <b>SDLC</b>: Agile / Scrum, Waterfall<br />
              <b>Tools</b>: AWS (EC2, RDS, S3, Lambda, CloudWatch, IAM), Docker, CI / CD, Data JPA, Maven, Swagger, JUnit, JMeter, Apache Tomcat, PostgreSQL, MySQL, JSON, RESTful API, gRPC, Atlassian Jira, Grafana, Git, GitHub, Gitlab, Bitbucket, Postman<br />
              <b>Platforms</b>: Linux, Windows, MacOS
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <img src={cloud} alt="cloud" style={{ height: "450px", width: "auto" }} />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <Link to="/contact" className="purple">connect </Link>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nodirbekergashev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/nodirshox"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFilePdf />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
