import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductModal from '../Modals/AddProductModal';
import { getCategories, getCategoryData } from '../apis';
import ProductCard from '../Components/ProductCard';

const Products = () => {

    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState([]);
    const [btn, setBtn] = useState("");
    const [cateData, setCateData] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        const category = getCategories();
        category.then((res) => {
            setData(res);
            setBtn(res[0]);
        });
    }

    useEffect(() => {
        getCateData(btn);
    }, [btn]);

    const getCateData = (btn) => {
        const categoryData = getCategoryData(btn);
        categoryData.then((res) => {
            setCateData(res);
        });
    }

    return (
        <>
            <section className="products-page sectiontop">
                <Container>
                    <div className="d-flex align-items-center justify-content-between">
                        <h1 className="page-head">All products</h1>
                        {/* <button type="button" className="btn sitebtn" onClick={() => setModalShow(true)}>Add</button> */}
                    </div>
                    <Row className="mt-4 mt-md-5">
                        <Col xs="12" md="4" lg="3" className="mb-4 mb-md-0">
                            <div className="navbtns">
                                {
                                    data.map((da) => (
                                        <button key={da} type="button" className={`btn navbtn ${btn === da ? "active" : ""}`} onClick={() => setBtn(da)}>{da}</button>
                                    ))
                                }
                            </div>
                        </Col>
                        <Col xs="12" md="8" lg="9">
                            <div className="gridbox">
                                {cateData && <ProductCard data={cateData} />}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {modalShow && <AddProductModal show={modalShow} onClose={() => setModalShow(false)} />}
        </>
    )
}

export default Products;