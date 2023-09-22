import React from 'react';
import {Box} from "@mui/material";
import Products from "../Products";
import Filter from "../Filter";
import BlockTitle from "../BlockTitle";
import {
    CatalogComponentWrapper,

} from "./styled";
import SortComponent from "../SortComponent";

const CatalogComponent = () => {
    return (
        <CatalogComponentWrapper>
            <Filter/>
            <Box className="catalog__content">
                <div className="content">
                    <div className="content__top">
                        <BlockTitle>Small Dog</BlockTitle>
                        <SortComponent/>
                    </div>
                    <Products/>
                </div>
            </Box>
        </CatalogComponentWrapper>
    );
};

export default CatalogComponent;