import { useState } from 'react';
import './App.css';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import Login from './assets/components/Login';
import Register from './assets/components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProList from './assets/components/ProList';



function App() {
  const [currentForm, setCurrentForm] = useState(null); // 'login' or 'register'
  
  const handleLoginClick = () => {
    setCurrentForm('login');
  };
  const handleClose = () => {
    setCurrentForm(null);
  };
  return (
    <div className="App">
      <Router>
        <Header onLoginClick={handleLoginClick}/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProList/>} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={
              <div >
                {currentForm === 'login' && <Login onRegisterClick={() => setCurrentForm('register')} onClose={handleClose}  />}
                
              </div>} />
            <Route path="/register" element={
              <div >
                {currentForm === 'register' && <Register onBackClick={() => setCurrentForm('login')} onClose={handleClose}/>}
                
              </div>} />
          </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
