import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem('conected')
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
             
            </li>
          </ul>
          {isLogin && (
            <button onClick={() => {
            localStorage.clear()
            navigate("/")
          }}>
            logout
          </button>
          )}
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
