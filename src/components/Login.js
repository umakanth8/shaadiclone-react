import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "./favicon.png";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password); 
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "400px" }}
      >
        <div className="modal-content rounded-3 shadow border-0">
          <div className="modal-header border-0 justify-content-center position-relative">
            <img
              src={favicon}
              alt="Logo"
              className="img-fluid"
              style={{ width: "50px", height: "50px" }}
            />
            <button
              type="button"
              className="btn-close position-absolute"
              aria-label="Close"
              style={{ top: "10px", right: "15px" }}
            ></button>
          </div>
          <div className="modal-body text-center">
            <h5
              className="modal-title fw-bold mb-4"
              style={{ fontSize: "18px", color: "#000" }}
            >
              Welcome back! Please Login
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="text-start mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                  Mobile No. / Email ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Mobile no. / Email ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="text-start mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="stay-logged-in"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="stay-logged-in"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      color: "#000",
                    }}
                  >
                    Stay logged in
                  </label>
                </div>
                <a
                  href="#"
                  className="text-primary text-decoration-none fw-bold ms-3"
                  style={{ fontSize: "14px" }}
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 mb-3"
                style={{
                  backgroundColor: "#5bc0de",
                  borderColor: "#5bc0de",
                }}
              >
                Login
              </button>
              <div className="text-center mb-3">
                <span
                  className="fw-bold text-secondary"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  OR
                </span>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg w-100"
                style={{
                  backgroundColor: "#5bc0de",
                  borderColor: "#5bc0de",
                  fontWeight: "bold",
                }}
              >
                Login with OTP
              </button>
            </form>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <span style={{ fontSize: "14px", color: "#6c757d" }}>
              New to Shaadi?{" "}
            </span>
            <a
              href="#"
              className="text-primary fw-bold text-decoration-none ms-1"
              style={{ fontSize: "14px" }}
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
