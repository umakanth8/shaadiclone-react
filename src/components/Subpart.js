import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import vipLogo from "./vip_logo.webp";

export default function ProfileForm() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mt-5 text-center">
      <Banner />

      <Row className="justify-content-center mt-5">
        <h2 className="text-danger fw-bold">Find your Special Someone</h2>
      </Row>

      <Row className="justify-content-center mt-4 flex-column flex-md-row">
        <Feature
          number="1"
          title="Sign Up"
          description="Register for free & put up your Matrimony Profile"
          icon="icon-signup.png"
          onClick={handleShowModal}
        />
        <Feature
          number="2"
          title="Connect"
          description="Select & Connect with Matches you like"
          icon="icon-connect.png"
          onClick={handleShowModal}
        />
        <Feature
          number="3"
          title="Interact"
          description="Become a Premium Member & Start a Conversation"
          icon="icon-interact.png"
          onClick={handleShowModal}
        />
      </Row>

      <ProfileSelectionModal show={showModal} onHide={handleCloseModal} />
    </Container>
  );
}

function Banner() {
  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 p-md-4 rounded"
      style={bannerContainerStyle}
    >
      <div className="text-center text-md-start mb-3 mb-md-0">
        <h5 className="fw-bold mb-1" style={{ color: "#FFD700" }}>
          Exclusive & Personalised Matchmaking by Shaadi.com
        </h5>
        <p className="mb-0 text-white small">
          Top Rated Consultants | 5 times higher success rates | 100% Privacy
        </p>
      </div>
      <div
        className="d-none d-md-block border-start border-warning mx-4"
        style={{ height: "60px" }}
      ></div>
      <div className="d-flex flex-column align-items-center">
        <img
          src={vipLogo}
          alt="VIP Shaadi"
          className="mb-2"
          style={{ maxHeight: "30px" }}
        />
        <Button className="fw-bold" style={getInvitedButtonStyle}>
          Get Invited →
        </Button>
      </div>
    </div>
  );
}

function Feature({ number, title, description, icon, onClick }) {
  return (
    <Col xs={12} md={3} className="text-center mb-4 mb-md-0">
      <div
        className="position-relative bg-info rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
        style={{ width: "80px", height: "80px", cursor: "pointer" }}
        onClick={onClick}
      >
        <Image src={icon} className="w-50" />
        <span
          className="position-absolute bottom-0 start-50 translate-middle bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "24px", height: "24px", fontSize: "14px" }}
        >
          {number}
        </span>
      </div>
      <h6 className="text-info fw-bold">{title}</h6>
      <p className="text-muted">{description}</p>
    </Col>
  );
}

function ProfileSelectionModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>This Profile is for</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProfileOptions />
      </Modal.Body>
    </Modal>
  );
}

function ProfileOptions() {
  const options = [
    "Myself",
    "My Son",
    "My Daughter",
    "My Brother",
    "My Sister",
    "My Friend",
    "My Relative",
  ];
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {options.map((option, idx) => (
        <Button key={idx} variant="outline-primary" className="px-3 py-2">
          {option}
        </Button>
      ))}
    </div>
  );
}

const bannerContainerStyle = {
  backgroundColor: "#1a1a1a",
  color: "#f3a4a4",
  borderRadius: "12px",
  maxWidth: "1000px",
  margin: "auto",
};

const getInvitedButtonStyle = {
  backgroundColor: "#d7a600",
  color: "#000",
  border: "none",
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "5px",
};
