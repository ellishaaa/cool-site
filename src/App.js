import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Products";
import About from "./components/Pages/Services";
import SignUP from "./components/Pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUP />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
