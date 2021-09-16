import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {

  const styles = {
    primaryLink: {
      textDecoration: 'none',
      color: 'white',
    },
    secondaryLink: {
      textDecoration: 'none',
      color: 'grey',
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


  if (active === "portfolio") {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Gerardo Munoz</Navbar.Brand>
            <Nav className="me-auto">
              <Button variant="link" style={styles.secondaryLink} onClick={aboutClick}>About Me</Button>
              <Button variant="link" style={styles.primaryLink} onClick={portfolioClick}>Portfolio</Button>
              <Button variant="link" style={styles.secondaryLink} onClick={contactClick}>Contact Me</Button>
              <Nav.Link href="https://drive.google.com/file/d/1gVfAEE5JCb16DiJI_7jd4J5O4x0gtwqg/view?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Portfolio/>
        <Footer />
      </div>
    );
  } else if (active === "aboutMe") {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Gerardo Munoz</Navbar.Brand>
            <Nav className="me-auto">
              <Button variant="link" style={styles.primaryLink} onClick={aboutClick}>About Me</Button>
              <Button variant="link" style={styles.secondaryLink} onClick={portfolioClick}>Portfolio</Button>
              <Button variant="link" style={styles.secondaryLink} onClick={contactClick}>Contact Me</Button>
              <Nav.Link href="https://drive.google.com/file/d/1gVfAEE5JCb16DiJI_7jd4J5O4x0gtwqg/view?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <AboutMe />
        <Footer />
      </div>
    );
  } else if (active === "contact") {
      return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Gerardo Munoz</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="link" style={styles.secondaryLink} onClick={aboutClick}>About Me</Button>
            <Button variant="link" style={styles.secondaryLink} onClick={portfolioClick}>Portfolio</Button>
            <Button variant="link" style={styles.primaryLink} onClick={contactClick}>Contact Me</Button>
            <Nav.Link href="https://drive.google.com/file/d/1gVfAEE5JCb16DiJI_7jd4J5O4x0gtwqg/view?usp=sharing" target="_blank">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AboutMe />
      <Footer />
    </div>
    )
  }
}

export default App;