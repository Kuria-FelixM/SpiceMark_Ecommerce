import React from 'react';
import  Header  from './components/Header';
import  Footer  from './components/footer';
import { Container } from 'react-bootstrap';





export default function App() {
  return (
    <>
    <div>
      < Header />
      <Container>
        <h1>Welcome to the Home</h1>
      </Container>
      <Footer />

    </div>
    
    </>
  );
}
