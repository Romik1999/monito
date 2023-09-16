import React from 'react';
import {Box} from "@mui/material";
import Filter from "../Filter";
import Products from "../Products";
import {useStyles} from "./styles";


const CatalogComponent = () => {

    const classes = useStyles()

    return (
        <Box className={classes.catalog}>
            <Box className="catalog__filter">
                <Filter/>
            </Box>
            <Box className="catalog__content">
                <div className="content">
                    <div className="content__top">
                        <div className="content__left">
                            <div className="content__title block-title">Small Dog</div>
                            <div className="items-count">52 puppies</div>
                        </div>
                        <div className="content__sort">
                            <div className="sort"></div>
                        </div>
                    </div>
                    <Products/>
                </div>
            </Box>
        </Box>
    );
};

export default CatalogComponent;