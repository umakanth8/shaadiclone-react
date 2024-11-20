import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HelpSection({ closeSection }) {
  return (
    <div
      className="position-absolute bg-white rounded shadow"
      style={{
        top: '40px',
        right: '0',
        zIndex: '1050',
        width: '300px',
        border: '1px solid #ddd',
        padding: '15px',
      }}
    >
      <div className="d-flex">

        <div className="flex-grow-1 pe-3">
          <div className="mb-4">
            <h6 className="fw-bold" >To get instant help</h6>
            <a href="#" className="text-primary text-decoration-none">
              Click here &rsaquo;
            </a>
            <p className="text-success mt-1" style={{ fontSize: '14px' }}>
              <i className="bi bi-clock"></i> No wait time!
            </p>
          </div>
          <hr />
          <div className="mb-4">
            <h6 className="fw-bold">Submit a ticket</h6>
            <a href="#" className="text-primary text-decoration-none">
              Write to Customer Care &rsaquo;
            </a>
          </div>
          <hr />
          <div className="mb-4">
            <h6 className="fw-bold">Call on +91-8095031111</h6>
            <a href="#" className="text-primary text-decoration-none">
              Click for regional offices &rsaquo;
            </a>
            <p className="mt-1" style={{ fontSize: '12px' }}>
              Call 10am - 7pm (IST)
            </p>
            <p className="text-danger mt-1" style={{ fontSize: '14px' }}>
              <i className="bi bi-exclamation-circle"></i> Wait time: 5-8 mins
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="flex-shrink-0 ps-3"
          style={{
            backgroundColor: '#f8f9fa',
            width: '150px',
            borderRadius: '8px',
            padding: '10px',
          }}
        >
          <ul className="list-unstyled mb-0">
            <li className="mb-3">
              <a
                href="#"
                className="text-dark text-decoration-none fw-bold"
              >
                Help Desk
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-dark text-decoration-none fw-bold"
              >
                Be Safe Online
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none fw-bold"
              >
                Shaadi Live
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
