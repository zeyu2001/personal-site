import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Animations.css";
import "./App.css";

import Page from "./components/Page";
import Home from "./components/Home";
import About from "./components/About";
import Security from "./components/Security";
import Software from "./components/Software";
import Resources from "./components/Resources";
import Gallery from "./components/Gallery";
import NavBar from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/404";

class EasterEgg extends React.PureComponent {
  render() {
    for (let i = 0; i <= 10; i++)
      console.info("Your awesomeness meter: 0% [" + " █ ".repeat(i) + "   ".repeat(10 - i) + "] 100%")
    
    return null;
  }
}

function App() {
  let location = useLocation();
  
  return (
    <>
      <ScrollToTop />

      <NavBar />
      <div className="App">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            <Routes location={location}>
              <Route path="/" element={<Page component={Home} title="Home" />} />
              <Route path="/about" element={<Page component={About} title="About" />} />
              <Route path="/security" element={<Page component={Security} title="Security" />} />
              <Route path="/software" element={<Page component={Software} title="Software" />} />
              <Route path="/resources" element={<Page component={Resources} title="Resources" />} />
              <Route path="/gallery" element={<Page component={Gallery} title="Gallery" />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>

        <EasterEgg />
      </div>
    </>
  );
}

export default App;