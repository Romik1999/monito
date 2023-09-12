import React from 'react';
import AppBar from "../../components/AppBar";
import {Box} from "@mui/material";
import ResponsiveDrawer from "../../components/Filter";

const Catalog = () => {
    return (
        <>
            <AppBar/>

            <Box className="catalog">
                <Box className="catalog__filter">
                    <ResponsiveDrawer/>
                    {/*<div className="filter">*/}
                    {/*    <div className="filter__title block-title">Filter</div>*/}
                    {/*    <div className="filter__items">*/}
                    {/*        <div className="filter__item">*/}
                    {/*            <div className="filter-item">*/}
                    {/*                <div className="filter-item__checkbox"></div>*/}
                    {/*                <div className="filter-item__title"></div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Catalog;