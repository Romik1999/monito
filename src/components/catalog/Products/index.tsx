import React from 'react';
import Product from "../Product";
import {useQuery} from '@tanstack/react-query'
import {TodoService} from "../../../services/todo.service";

const Products = () => {
    const {isLoading, data} = useQuery(
        ['products'],
        () => TodoService.getAll(),
        {
            select: ({data}) => data
        }
    )
    console.log(data);
    return (
        <div>
            {isLoading ? (
                <div>Loading ..</div>
            ) : data?.length ? (
                <div>
                    {data.map(element => (
                        <Product
                            imgSrc={element.imgSrc}
                            title={element.title}
                            gene={element.gene}
                            age={element.age}
                            price={element.price}
                        />
                    ))}
                </div>
            ) : (
                <h1>Data not founded!</h1>
            )}
        </div>
    );
};

export default Products;