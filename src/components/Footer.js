import React from 'react';
import emailIcon from "../images/email.png";
import phoneIcon from "../images/phone.png";
import githubIcon from "../images/github.png";
import linkedInIcon from "../images/linkedin.png";

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
  },
  deep: {
    backgroundColor: "#4A5759"
},
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div style={styles.deep} className="mt-auto p-3 d-flex border-top justify-content-evenly fixed-bottom">
        <div className="col-md-4 d-flex align-items-center">
        <span className="text-white">Gerardo Munoz 2021</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-2 text-center">
            <a className="text-muted" href="mailto:gmunoz9619@gmail.com" style={styles.noDec}>
              <img src={emailIcon} alt=""/>
            </a>
            </li>
          <li className="ms-2 text-center">
            <a className="text-muted" href="tel:5129861629" style={styles.noDec}>
              <img src={phoneIcon} alt=""/>
            </a>
          </li>
          <li className="ms-2 text-center">
            <a className="text-muted" href="https://github.com/gmunoz94" target="_blank" rel="noreferrer" style={styles.noDec}>
              <img src={githubIcon} alt=""/>
            </a>
          </li>
          <li className="ms-2 text-center">
            <a className="text-muted" href="https://www.linkedin.com/in/gerardo-mu%C3%B1oz-7b114819b/" target="_blank" rel="noreferrer" style={styles.noDec}>
              <img src={linkedInIcon} alt=""/>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
