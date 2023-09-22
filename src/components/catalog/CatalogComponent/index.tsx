import React from 'react';
import Products from "../Products";
import Filter from "../Filter";
import BlockTitle from "../BlockTitle";
import {
    CatalogComponentContent, CatalogComponentTop,
    CatalogComponentWrapper,

} from "./styled";
import SortComponent from "../SortComponent";

const CatalogComponent = () => {
    return (
        <CatalogComponentWrapper>
            <Filter/>
            <CatalogComponentContent>
                <CatalogComponentTop>
                    <BlockTitle>Small Dog</BlockTitle>
                    <SortComponent/>
                </CatalogComponentTop>
                <Products/>
            </CatalogComponentContent>
        </CatalogComponentWrapper>
    );
};

export default CatalogComponent;