import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'

const [contactSelected, setContactSelected] = useState(false);

function App() {
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main className="container my-5">
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
