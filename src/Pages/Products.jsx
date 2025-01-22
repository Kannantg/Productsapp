import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductModal from '../Modals/AddProductModal';

const Products = () => {

    const [modalShow, setModalShow] = useState(false);

  return (
    <> 
        <section className="products-page sectiontop">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="page-head">All products</h1>
                    <button type="button" className="btn sitebtn" onClick={() => setModalShow(true)}>Add</button>
                </div>
                <Row>
                    <Col xs="12" lg="4"></Col>
                    <Col xs="12" lg="8"></Col>
                </Row>
            </Container>
        </section>


        <AddProductModal show={modalShow} onClose={() => setModalShow(false)} />
    </>
  )
}

export default Products;