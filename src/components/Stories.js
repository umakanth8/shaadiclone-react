import React from "react";
import { Container, Row, Carousel, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import priya from "./priya.png";
import shubha from "./subham.png";
import pinky from "./pinky.png";

export default function Stories() {
  const stories = [
    {
      image: priya,
      title: "Priyanka & Somonath",
      description:
        "Finding true love in today's fast-paced world can be challenging. But sometimes, the most beautiful stories unfold in the most unexpected ways.",
    },
    {
      image: shubha,
      title: "Shubham & Shruti",
      description:
        "Shubham and Shruti’s journey from strangers to life partners is a heartwarming tale of modern love facilitated by Shaadi.com. Their story is...",
    },
    {
      image: pinky,
      title: "Habeeba & Alikhan",
      description:
        "I have married Syed Habeeba from Nellore on 4.7.2024. Thank you so much Shaadi.com for supporting all the staff. Jazakallah khair...",
    },
    {
      image: pinky,
      title: "Pinky & Nikhil",
      description:
        "Pinky and Nikhil’s love story is a testament to Shaadi.com's ability to connect hearts across boundaries. Their journey inspires others to believe in love.",
    },
    {
      image: priya,
      title: "Another Success Story",
      description:
        "Another couple’s journey of love and companionship started through Shaadi.com and led to a happy marriage.",
    },
    {
      image: shubha,
      title: "Another Success Story",
      description:
        "Another couple’s journey of love and companionship started through Shaadi.com and led to a happy marriage.",
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const chunkedStories = [];
  const chunkSize = isMobile ? 1 : 3; 
  for (let i = 0; i < stories.length; i += chunkSize) {
    chunkedStories.push(stories.slice(i, i + chunkSize));
  }

  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <h2 className="text-danger fw-bold">
          6 Million Success Stories & Counting
        </h2>
      </Row>
      <Carousel interval={null} controls={true} indicators={false}>
        {chunkedStories.map((storyGroup, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {storyGroup.map((story, idx) => (
                <Col xs={12} md={4} className="mb-3" key={idx}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={story.image}
                      className="img-fluid"
                      style={{
                        width: "300px", 
                        height: "200px", 
                        objectFit: "cover",
                        margin: "0 auto", 
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold ">
                        {story.title}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        {story.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
