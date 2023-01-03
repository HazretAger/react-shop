import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './index';

import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './pages/Home';
import { useAppSelector } from './hooks/redux';
import { RootState } from './store/store';


function App() {
  const {} = useAppSelector((state: RootState) => state.searchReducer.products);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
