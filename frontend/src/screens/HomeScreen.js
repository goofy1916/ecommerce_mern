import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
          {products.map(product => (
              <Col sm={12} md={6} lg={5} xl={4}>
              <Product key={product._id} product={product}/>
              </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
