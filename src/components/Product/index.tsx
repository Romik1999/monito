import React from 'react';

interface ProductProps {
    imgSrc: string,
    title: string,
    gene: string,
    age: string,
    price: string
}

const Product = (props: ProductProps) => {
    const {imgSrc,title, age, gene, price} = props
    return (
        <div className="product">
            <div className="product__img">
                <img src={imgSrc} alt={title}/>
            </div>
            <div className="product__title">{title}</div>
            <div className="product__props">
                <div className="product__prop">Gene: <b>{gene}</b></div>
                <div className="product__prop">Age: <b>{age}</b></div>
            </div>
            <div className="product__price">{price} VND</div>
        </div>
    );
};

export default Product;