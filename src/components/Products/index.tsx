import React from 'react';
import Product from "../Product";
import {products} from "../../common/moks/products";

const Products = () => {

    const renderProducts = products.map((element):JSX.Element=>{
        return (
            <Product
                imgSrc={element.imgSrc}
                title={element.title}
                gene={element.gene}
                age={element.age}
                price={element.price}
            />
        )
    })

    return (
        <div className="products">
            {renderProducts}
        </div>
    );
};

export default Products;