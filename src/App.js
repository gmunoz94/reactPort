import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';



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

    return (
      <div>
        <Router>
        <Navbar style={styles.deep} variant="dark">
          <Container>
            <Navbar.Brand>Gerardo Munoz</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link style={styles.secondaryLink } href='/'>About Me</Nav.Link>
              <Nav.Link style={styles.secondaryLink } href='/Portfolio'>Portfolio</Nav.Link>
              <Nav.Link style={styles.secondaryLink } href='/Contact'>Contact Me</Nav.Link>
              <Nav.Link style={styles.secondaryLink} href="https://drive.google.com/file/d/1gVfAEE5JCb16DiJI_7jd4J5O4x0gtwqg/view?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Footer />
        </Router>
      </div>
    );
  }

export default App;