import React from 'react';
import {Container} from 'react-bootstrap';
import Navbar from './components/navbar';
import Footer from './components/footer';


export default function App() {
  return (
    <>
    <div>

      <Navbar />
      <Container>
        <h1>Spice Mark Fashions</h1>

      </Container>
      <Footer />
    </div>
    
    </>
  )
}
