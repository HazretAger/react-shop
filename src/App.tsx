import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './index';

import Header from './componets/Header/Header';
// import Footer from './componets/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Register';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
