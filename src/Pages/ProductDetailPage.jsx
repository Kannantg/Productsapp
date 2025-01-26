import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getProductsDetail } from '../apis';
import { MdEventAvailable } from "react-icons/md";
import { LiaGrinStars } from "react-icons/lia";
import { Rating } from 'react-simple-star-rating';
import { FaCheckCircle } from "react-icons/fa";

const ProductDetailPage = () => {

    const { id } = useParams();
    const [detdata, setDetData] = useState({});

    useEffect(() => {
        getDataDetail(id);
    }, [id]);

    const getDataDetail = (id) => {
        const getDetailData = getProductsDetail(id);
        getDetailData.then((res) => setDetData(res));
    }

    const offlist = ["No-Risk Money Back Guarantee!", "No Hassle Refunds", "Secure Payments"];

    return (
        <section className="productdetail">
            <Container>
                <Row>
                    <Col xs="12" lg="6" className="mb-4 mb-lg-0">
                        <div className="productdetail-imgbox">
                            <img src={detdata?.image} alt={detdata?.title} className="img-fluid" width="300" height="300" title={detdata?.title} loading="lazy" />
                        </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <div className="productdetail-databox">
                            <p className="productdetail-category">{detdata?.category}</p>
                            <h1 className="productdetail-head">{detdata?.title}</h1>
                            <p className="productdetail-price">${detdata?.price}</p>
                            <p className="paracontent">{detdata?.description}</p>
                            <p className="productdetail-para">
                                <MdEventAvailable />
                                Available count: {detdata?.rating?.count}
                            </p>
                            <p className="productdetail-para">
                                <LiaGrinStars />
                                Ratings:
                                <Rating initialValue={detdata?.rating?.rate} iconsCount={5} allowFraction={true} readonly={true} size={20} />
                            </p>
                            <p className="productdetail-para">
                                <b>Free shipping on orders over $50!</b>
                            </p>
                            <ul className="productdetail-ul">
                                {
                                    offlist.map((ofli) => (
                                        <li className="productdetail-li" key={ofli}>
                                            <FaCheckCircle /> {ofli}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductDetailPage;