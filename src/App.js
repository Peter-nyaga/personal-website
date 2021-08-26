import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Particles
          params={{
            particles:{
              number:{
                value:30,
                density:{
                  enable:true,
                  value_area:900
                }
              },
              shape:{
                type: "star",
                stroke:{
                  width: 6,
                  color: "#f9ab00"
                }
              }
            }
          }}
        />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
