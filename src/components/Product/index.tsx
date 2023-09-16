import React from 'react';
import {useStyles} from "./styles";

interface ProductProps {
    imgSrc: string,
    title: string,
    gene: string,
    age: string,
    price: string
}

const Product = (props: ProductProps) => {
    const {imgSrc, title, age, gene, price} = props
    const classes = useStyles()
    return (
        <div className={classes.product}>
            <div className={classes.productImg}>
                <img src={imgSrc} alt={title}/>
            </div>
            <div className={classes.productWrapper}>
                <div className={classes.productTitle}>{title}</div>
                <div className={classes.productProps}>
                    <div className={classes.productProp}>Gene: <b>{gene}</b></div>
                    <div className={classes.productProp}>Age: <b>{age}</b></div>
                </div>
                <div className={classes.productPrice}>{price} VND</div>
            </div>
        </div>
    );
};

export default Product;