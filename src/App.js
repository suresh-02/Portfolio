import "./App.css";
import About from "./Components/Content/about";
import Intrest from "./Components/Content/Intrest";
import Intro from "./Components/Content/intro";
import Skills from "./Components/Content/skills";
import Header from "./Components/Layout/header";
import Education from "./Components/Content/education";
import Works from "./Components/Content/works";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Intrest />
      <Works/>
      <Education />
    </div>
   
  );
}

export default App;
