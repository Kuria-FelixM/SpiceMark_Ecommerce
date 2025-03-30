import React, { useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { Row,Col,Card } from 'react-bootstrap'

function HomeScreen() {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    async function fetchproducts(){
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }
    fetchproducts()
  },[])
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {products.map((product)=>(
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
           <Card className='my-3 p-3 rounded'>
             <img src={product.image} alt='..'></img>
           </Card>
            <h3>{product.productname}</h3>
            <h6>{product.price}</h6>
            <p>{product.productinformation}</p>
          </Col>
          
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
