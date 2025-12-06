
import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Objectives from "./components/Objectives";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Objectives />
      <Skills />
      <Education />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
  return <h1>Hello React Works!</h1>;
}

export default App;
