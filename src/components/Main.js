import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './LoginComponent';
import Helpsection from './Helpsection';
import dropdownicon from './dropdown-icon.png';
import helplineicon from './helpline-icon.png';

export default function Main() {
  const [showLogin, setShowLogin] = useState(false);
  const [showHelp, setShowHelp] = useState(false);


  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleHelpClick = () => setShowHelp(!showHelp);

  return (
    <section
      className="d-flex flex-column justify-content-between align-items-center text-center"
      style={{
        backgroundImage: `url('/assets/home-banner.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        color: 'white',
      }}
    >
  
      <div className="position-absolute top-0 start-0 p-3">
        <img src="/assets/logo.png" alt="Logo" style={{ width: '150px' }} />
      </div>

      <div
        className="position-absolute top-0 end-0 p-3 d-flex align-items-center gap-2"
        style={{ justifyContent: 'flex-end' }}
      >
        <button
          onClick={handleLoginClick}
          className="btn btn-link text-white text-decoration-none"
          style={{ padding: 0 }}
        >
          Login
          <img
            src={dropdownicon}
            alt="Dropdown Icon"
            style={{ width: '12px', height: '8px', marginLeft: '5px' }}
          />
        </button>
        <div className="position-relative">
          <button
            onClick={handleHelpClick}
            className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-2"
            style={{ padding: 0 }}
          >
            <img
              src={helplineicon}
              alt="Helpline Icon"
              style={{ width: '16px', height: '16px' }}
            />
            Help
          </button>
          {showHelp && <Helpsection closeSection={() => setShowHelp(false)} />}
        </div>
      </div>


      <div className="mt-auto w-100">
        <div className="pb-4">
          <h2>Trusted Matrimony & Matchmaking Service</h2>
        </div>


        <form
          className="row g-3 mx-auto mt-4 p-3 rounded"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            maxWidth: '1000px',
            width: '90%',
          }}
        >
          <div className="col-12 col-sm-6 col-md-3">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                I'm looking for a
              </option>
              <option value="Woman">Woman</option>
              <option value="Man">Man</option>
            </select>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Aged
              </option>
              {[...Array(73)].map((_, i) => (
                <option key={i} value={i + 20}>
                  {i + 20}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                To
              </option>
              {[...Array(73)].map((_, i) => (
                <option key={i} value={i + 20}>
                  {i + 20}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Of religion
              </option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Living in
              </option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-12 col-sm-6 col-md-1">
            <button type="submit" className="btn btn-primary w-100">
              Let's Begin
            </button>
          </div>
        </form>
      </div>

      {showLogin && <LoginComponent closeSection={handleCloseLogin} />}
    </section>
  );
}
