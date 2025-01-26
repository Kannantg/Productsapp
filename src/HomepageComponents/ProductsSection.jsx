import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getProducts } from '../apis';
import ProductCard from '../Components/ProductCard';
import NoData from '../Components/NoData';

const ProductsSection = (props) => {

    const { sectionhead } = props;
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getProductDatas();
    }, []);

    const getProductDatas = () => {
        const getData = getProducts();
        getData.then((res) => {
            setData(res);
            setShow(true);
        });
    }

    const filteredData = data.filter((_, i) => i < 8);

    return (
        <section className={`${sectionhead}section`}>
            <Container>
                <h2 className="section-head">{sectionhead}</h2>
                <div className="mt-5">
                    {
                        show ?
                            <div className="gridbox">
                                <ProductCard data={filteredData} />
                            </div> :
                            <NoData />
                    }
                </div>
            </Container>
        </section>
    )
}

export default ProductsSection;