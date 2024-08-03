import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Visitor from './Frontend/Pages/Visitor';
import Login from './Frontend/Pages/Login';
import Register from './Frontend/Pages/Register';
import AfterLogin from './Frontend/Pages/AfterLogin';
import Awareness from './Frontend/Pages/Awareness';
import Questionnaire from './Frontend/Pages/Questionnaire';
import AboutUs from './Frontend/Pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Visitor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/afterlogin" element={<AfterLogin />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
