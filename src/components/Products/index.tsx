import React from 'react';
import Product from "../Product";
import {products} from "../../common/moks/products";
import {useStyles} from "./styles";

const Products = () => {
    const classes = useStyles()
    const renderProducts = products.map((element): JSX.Element => {
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
        <div className={classes.products}>
            {renderProducts}
        </div>
    );
};

export default Products;