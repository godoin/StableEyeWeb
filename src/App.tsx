import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import ClassifyPage from "./Pages/User/Classify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classify" element={<ClassifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
