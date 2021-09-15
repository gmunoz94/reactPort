import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}

export default App;