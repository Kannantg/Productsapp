import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsSection from '../HomepageComponents/ProductsSection';

const Home = () => {

  return (
    <>
      <section className="sectionone bannersection">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" lg="10">
              <h1 className="banner-title">Best Way to Make Someone Happy to Buying Beautiful Products.</h1>
              <div className="text-center mt-4">
              <button type="button" className="btn sitebtn">Explore Products</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ProductsSection sectionhead="products" />
    </>
  )
}

export default Home;