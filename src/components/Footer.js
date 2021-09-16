import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  noDec: {
    textDecoration: 'none'
  }
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div className="footer mt-auto p-3 d-flex border-top justify-content-evenly fixed-bottom">
        <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <img src="/images/email.png" alt=""/>
        </a>
        <span className="text-muted">Gerardo Munoz 2021</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3 text-center">
            <a className="text-muted" href="mailto:gmunoz9619@gmail.com">
              <img src="/images/email.png" alt=""/>
              <p className="text-dark" style={styles.noDec}>Email</p>
            </a>
            </li>
          <li className="ms-3 text-center">
            <a className="text-muted" href="tel:5129861629">
              <img src="/images/phone.png" alt=""/>
              <p className="text-dark" style={styles.noDec}>Phone</p>
            </a>
          </li>
          <li className="ms-3 text-center">
            <a className="text-muted" href="https://github.com/gmunoz94" target="_blank" rel="noreferrer">
              <img src="/images/github.png" alt=""/>
              <p className="text-dark" style={styles.noDec}>Github</p>
            </a>
          </li>
          <li className="ms-3 text-center">
            <a className="text-muted" href="https://www.linkedin.com/in/gerardo-mu%C3%B1oz-7b114819b/" target="_blank" rel="noreferrer">
              <img src="/images/linkedin.png" alt=""/>
              <p className="text-dark" style={styles.noDec}>LinkedIn</p>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
