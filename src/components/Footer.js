import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import matches from "./matches.png";

export default function Footer() {
  return (
    <footer className="py-4">
      <Container>
 
        <Row className="text-center mb-2">
          <Col>
            <img
              src="/favicon.png" 
              alt="Logo"
              className="mb-2"
              style={{ width: "50px" }}
            />
          </Col>
        </Row>

        <Row className="text-center mb-3">
          <Col>
            <p className="text-secondary mx-auto" style={{ maxWidth: "800px" }}>
              Shaadi.com, India’s No.1 Matchmaking and Matrimony Service<sup>*</sup>, was
              founded with a simple objective – to help people find happiness. Shaadi.com
              is a leader in what is sometimes known as the matrimony category, and we have
              touched more than 50 million lives.
            </p>
          </Col>
        </Row>

        <Row className="text-center mb-3">
          <Col>
            <p className="mb-0">
              <a href="#india" className="text-primary text-decoration-none mx-2">
                India
              </a>
              |
              <a href="#usa" className="text-primary text-decoration-none mx-2">
                USA
              </a>
              |
              <a href="#canada" className="text-primary text-decoration-none mx-2">
                Canada
              </a>
              |
              <a href="#uk" className="text-primary text-decoration-none mx-2">
                UK
              </a>
              |
              <a href="#singapore" className="text-primary text-decoration-none mx-2">
                Singapore
              </a>
              |
              <a href="#australia" className="text-primary text-decoration-none mx-2">
                Australia
              </a>
              |
              <a href="#uae" className="text-primary text-decoration-none mx-2">
                UAE
              </a>
              |
              <a href="#nri" className="text-primary text-decoration-none mx-2">
                NRI Matrimonials
              </a>
            </p>
          </Col>
        </Row>


        <Row className="text-center mb-4">
          <Col>
            <div
              className="bg-info text-white py-2 px-4 rounded d-inline-block"
              style={{ fontSize: "16px" }}
            >
              Trusted by Millions
            </div>
          </Col>
        </Row>


        <Row className="text-center mb-4">
          <Col md={4} className="mb-3">
            <img
              src={matches}
              alt="Best Matches"
              className="mb-2"
              style={{ width: "54px" }}
            />
            <p className="fw-bold mb-0">Best Matches</p>
          </Col>
          <Col md={4} className="mb-3">
            <img
              src={matches}
              alt="Verified Profiles"
              className="mb-2"
              style={{ width: "54px" }}
            />
            <p className="fw-bold mb-0">Verified Profiles</p>
          </Col>
          <Col md={4} className="mb-3">
            <img
              src={matches}
              alt="100% Privacy"
              className="mb-2"
              style={{ width: "54px" }}
            />
            <p className="fw-bold mb-0">100% Privacy</p>
          </Col>
        </Row>

        <hr />

        <Row className="text-center mt-4 d-none d-md-flex">
          <Col md={3}>
            <h6 className="fw-bold mb-3">Need Help?</h6>
            <ul className="list-unstyled">
              <li>Member Login</li>
              <li>Sign Up</li>
              <li>Partner Search</li>
              <li>How to Use Shaadi.com</li>
              <li>Premium Memberships</li>
              <li>Customer Support</li>
              <li>Site Map</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Shaadi Blog</li>
              <li>Careers</li>
              <li>Awards & Recognition</li>
              <li>Cov-Aid</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold mb-3">Privacy & You</h6>
            <ul className="list-unstyled">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Be Safe Online</li>
              <li>Report Misuse</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold mb-3">More</h6>
            <ul className="list-unstyled">
              <li>VIP Shaadi</li>
              <li>Select Shaadi</li>
              <li>Sangam</li>
              <li>Shaadi Centres</li>
              <li>Success Stories</li>
              <li>Shaadi Live</li>
            </ul>
          </Col>
        </Row>

    
        <Row className="text-center bg-light  mt-3">
          <Col>
            <p className="text-secondary small">
              © 1996-2024 Shaadi.com, The World’s Leading Matchmaking Service™. Passionately
              created by People Group.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
