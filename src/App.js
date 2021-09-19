import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {

  const styles = {
    primaryLink: {
      textDecoration: 'overline',
      color: 'white',
    },
    secondaryLink: {
      textDecoration: 'none',
      color: '#f5d6c7',
    },
    deep: {
      backgroundColor: "#4A5759"
  },
  }

  let [ active, setActive ] = useState('aboutMe');

  const portfolioClick = () => {
    setActive('portfolio');
  }

  const aboutClick = () => {
    setActive('aboutMe');
  }

  const contactClick = () => {
    setActive('contact')
  }

    return (
      <div>
        <Navbar style={styles.deep} variant="dark">
          <Container>
            <Navbar.Brand>Gerardo Munoz</Navbar.Brand>
            <Nav className="me-auto">
              <Button variant="link" style={ active === "aboutMe" ? styles.primaryLink : styles.secondaryLink } onClick={aboutClick}>About Me</Button>
              <Button variant="link" style={ active === "portfolio" ? styles.primaryLink : styles.secondaryLink } onClick={portfolioClick}>Portfolio</Button>
              <Button variant="link" style={ active === "contact" ? styles.primaryLink : styles.secondaryLink } onClick={contactClick}>Contact Me</Button>
              <Nav.Link style={styles.secondaryLink} href="https://drive.google.com/file/d/1gVfAEE5JCb16DiJI_7jd4J5O4x0gtwqg/view?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        { active === "aboutMe" ? <AboutMe/> : <div></div> }
        { active === "portfolio" ? <Portfolio/> : <div></div> }
        { active === "contact" ? <Contact/> : <div></div> }
        <Footer />
      </div>
    );
  }

export default App;