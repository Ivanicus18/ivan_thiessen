import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main className="container my-5">
        <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
