import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
        setPortfolioSelected={setPortfolioSelected}
        portfolioSelected={portfolioSelected}
      ></Nav>
      <main className="container my-5">
        { !portfolioSelected ? (
          <>
            <About></About>
            <ContactForm></ContactForm>
          </>
        ) : ( 
          <>
            <Portfolio></Portfolio>
          </>
        )}
      </main>
      <footer className="container text-center py-3">
        <h3 className="text-dark">&copy; 2022 by Ivan Thiessen</h3>
      </footer>
    </div>
  );
}

export default App;
