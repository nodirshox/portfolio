import {Col, Container, Row} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Particle from "../Particle";
import React, {useEffect, useState} from "react";
import {AxiosClient} from "../../axios";
import ReactMarkdown from 'react-markdown';

function Image(props) {
  return <img {...props} style={{maxWidth: '100%'}} />
}

function BlogContent() {
  const params = useParams();
  const [title, setTitle] = useState("Loading...");
  const [body, setBody] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const fetchData = async () => {
    const post = await AxiosClient.get(`/posts`, {
      params: {
        uuid: params.id
      }
    })
    setTitle(post.data.title.S);
    setBody(post.data.message.S);
    setCreatedAt(new Date(parseInt(post.data.uuid.S)).toLocaleDateString('en-US'));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", backgroundColor: "#000000" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            {title}
          </h1>
          <p><small>{createdAt}</small></p>
            <ReactMarkdown renderers={{image: Image}}>{body}</ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default BlogContent;