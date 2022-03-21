import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Animations.css";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Security from "./components/Security";
import Software from "./components/Software";
import NavBar from "./components/Nav";

function App() {
  let location = useLocation();

  return (
    <>
      <NavBar />
      <div className="App">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/security" element={<Security />} />
              <Route path="/software" element={<Software />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;