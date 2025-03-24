import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import SignupScreen from './components/screens/SignupScreen';
import LoginScreen from './components/screens/LoginScreen';
import CartScreen from './components/screens/CartScreen';


function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
      
     
        <Route exact path="/login" element={<LoginScreen />} />
      
     
        <Route exact path="/signup" element={<SignupScreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
