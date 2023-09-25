import React from 'react';
import {
    ProductContainer,
    ProductImg,
    ProductProp,
    ProductTitle,
    ProductWrapper,
    ProductPrice, ProductPropsRow
} from "./styled";

interface ProductProps {
    imgSrc?: string,
    title: string,
    gene?: string,
    age?: string,
    price?: string
}

const Product = (props: ProductProps) => {
    const {imgSrc, title, age, gene, price} = props
    return (
        <ProductContainer>
            <ProductImg>
                <img src={imgSrc} alt={title}/>
            </ProductImg>
            <ProductWrapper>
                <ProductTitle>{title}</ProductTitle>
                <ProductPropsRow>
                    <ProductProp>Gene: <b>{gene}</b></ProductProp>
                    <ProductProp>Age: <b>{age}</b></ProductProp>
                </ProductPropsRow>
                <ProductPrice>{price} VND</ProductPrice>
            </ProductWrapper>
        </ProductContainer>
    );
};

export default Product;