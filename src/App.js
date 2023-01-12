import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
