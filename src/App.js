import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUP from './components/Pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' exact Component={Services}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/sign-up' exact Component={SignUP}/>
        </Routes>
      <Footer/>
      </Router>

    </>
  );
}

export default App;
