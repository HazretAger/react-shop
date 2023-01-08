import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './index';

import Header from './componets/Header';
// import Footer from './componets/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
