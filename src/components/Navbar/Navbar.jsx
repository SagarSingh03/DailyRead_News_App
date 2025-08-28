import React, { useState } from 'react'
import './Navbar.css'
import SignUp from '../Sign Up/SignUp';

function Navbar({ setCategory }) {

  const [showSignup, setShowSignup] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">DailyRead</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {["general", "technology", "business", "health", "sports", "entertainment"].map((cat) => (
              <li key={cat} className="nav-item">
                <button className="nav-link btn btn-link text-light" onClick={() => setCategory(cat)}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="ms-auto mx-4 my-2">
              <button className='btn btn-primary' onClick={() => setShowSignup(true)}>Sign Up</button>
          </div>
        </div>
      </div>

      {showSignup && (
        <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setShowSignup(false)}>X</button>
              <SignUp/>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
