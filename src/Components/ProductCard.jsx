import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
    return (
        <>
            {
                data.map((da) => (
                    <Link to={`/product/${da.id}/${da.title.split(" ").join("-")}`} key={da.title}>
                        <div className="productcard">
                            <div className="productcard-head">
                                <img src={da.image} alt={da.title} className="img-fluid productcard-image" width="100" height="100" loading="lazy" />
                            </div>
                            <div className="productcard-body">
                                <span className="productcard-category">{da.category}</span>
                                <p className="productcard-title">{da.title.substring(0, 80)}...</p>
                                <span className="productcard-price">${da.price}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default ProductCard;