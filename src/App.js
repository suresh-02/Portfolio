import { Home } from "./Components/Content/home";
import { Projects } from "./Components/Content/projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
