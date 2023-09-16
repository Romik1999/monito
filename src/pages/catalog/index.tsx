import React from 'react';
import AppBar from "../../components/AppBar";
import {Box} from "@mui/material";
import Footer from "../../components/Footer";
import Container from "@mui/material/Container";
import Filter from "../../components/Filter";

const Catalog = () => {
    return (
        <>
            <AppBar/>
            <main className="main">
                <Container maxWidth="lg">
                    <Box className="catalog">
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
                            </div>
                        </Box>
                    </Box>
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default Catalog;