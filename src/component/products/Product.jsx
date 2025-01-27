import React from 'react';
import './Product.scss';

function Product({ title, price, img}) {
    return (
        <div className="content">
             <img src={img} alt="" />
            <p>{price}k</p>
            <h2>{title}</h2>
           
        </div>
    );
}

export default Product;