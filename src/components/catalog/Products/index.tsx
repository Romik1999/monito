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
    const {isLoading, error, data} = useQuery(
        ['products', 1],
        () => axios.get<IData>('http://localhost:5000/products'),
        {
            select: ({data}) => data
        }
    )
    console.log(data);
    return (
        <div>
            {/*{isLoading ? (*/}
            {/*    <div>Loading ..</div>*/}
            {/*) : data ? (*/}
            {/*    {data}*/}
            {/*) : (*/}
            {/*    <h1>Data not founded!</h1>*/}
            {/*)}*/}
        </div>
    );
};

export default Products;