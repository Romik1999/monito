import React from 'react';
import {ProductContainer, ProductWrapper} from "./styled";
interface ProductProps {
    imgSrc?: string,
    title: string,
    gene: string,
    age: string,
    price: string
}

const Product = (props: ProductProps) => {
    const {imgSrc, title, age, gene, price} = props
    return (
        <ProductContainer>
            <div className="">
                <img src={imgSrc} alt={title}/>
            </div>
            <ProductWrapper>
                <div className="">{title}</div>
                <div className="">
                    <div className="">Gene: <b>{gene}</b></div>
                    <div className="">Age: <b>{age}</b></div>
                </div>
                <div className="">{price} VND</div>
            </ProductWrapper>
        </ProductContainer>
    );
};

export default Product;