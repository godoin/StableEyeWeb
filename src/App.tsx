import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/User";
import ClassifyPage from "./Pages/User/Classify";
import LoginPage from "./Pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/classify" element={<ClassifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
