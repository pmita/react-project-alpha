import React from 'react';
//Importing our components
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
//Importing everything router related
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavMenu />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
