import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import  SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from "./components/screens/LoginScreen";


export default function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
    <Routes>
      <Route path="/signup" element={<SignupScreen />} />
    </Routes>
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}
