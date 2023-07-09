import "./App.css";
import About from "./Components/Content/about";
import Intrest from "./Components/Content/Intrest";
import Intro from "./Components/Content/intro";
import Skills from "./Components/Content/skills";
import Header from "./Components/Layout/header";
import Works from "./Components/Content/works";
import Education from "./Components/Content/education";
import Projects from "./Components/Content/projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Intrest />
        <Works />
        <Routes>
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Education />
      </Router>
    </div>
  );
}

export default App;
