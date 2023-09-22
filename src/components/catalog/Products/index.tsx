import React from 'react';
import Product from "../Product";
import {products} from "../../../common/moks/products";
import {useStyles} from "./styles";
import {useQuery} from '@tanstack/react-query'
import axios from "axios";

interface IData {
    id: number,
    slug: string,
    title: string,
    imageUrl: string,
    genderId: number,
    colorId: number,
    size: string,
    categoryId: number,
    createdAt: string,
    updatedAt: string,
    category: {
        slug: string,
        title: string
    }
}

const Products = () => {
    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const {data} = await axios.get(
                'http://localhost:5000/products'
            )
            return data as IData
        }
    })

    const classes = useStyles()
    const renderProducts = products.map((element): JSX.Element => {
        return (
            <Product
                key={element.id}
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