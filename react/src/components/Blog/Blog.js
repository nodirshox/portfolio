import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogContent from "./BlogContent";
import {AxiosClient} from "../../axios";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchFavourites = async () => {
    const posts = await AxiosClient.get("/posts");
    setPosts(posts.data);
    setIsLoaded(true);
  }
  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h3 className="project-heading">Blog</h3>
        {
          isLoaded && (
            <Row className="resume">
              {
                posts.map((post) => {
                  return (
                    <Col md={6} className="resume-left" key={post.uuid.S}>
                      <BlogContent
                        title={post.title.S}
                        date={new Date(parseInt(post.uuid.S)).toLocaleDateString('en-US')}
                        id={post.uuid.S}
                        key={post.uuid.S}
                      />
                    </Col>
                  )
                })
              }
            </Row>
          )
        }
        {
          !isLoaded && (
            <center>Loading...</center>
          )
        }
      </Container>
    </Container>
  );
}

export default Blog;
