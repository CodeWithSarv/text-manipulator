import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [modeName, setModeName] = useState("Dark");

  const changeMode = () => {
    if (props.mode === "light") {
      props.toggleMode();
      setModeName("Light");
    } else {
      props.toggleMode();
      setModeName("Dark");
    }
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Text-Manipulator
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About Us
                </Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <div className='form-check form-switch'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  onClick={changeMode}
                  role='switch'
                  id='switchCheckDefault'
                  htmlFor='switchCheckDefault'
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor='switchCheckDefault'>
                  Enable {modeName} Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
