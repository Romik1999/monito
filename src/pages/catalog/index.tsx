import React from 'react';
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import Container from "@mui/material/Container";
import CatalogComponent from "../../components/CatalogComponent";
import catalogBanner from "../../assets/images/catalog/catalog-banner-big.png";

const Catalog = () => {
    return (
        <>
            <AppBar/>
            <main className="main">
                <img src={catalogBanner} alt="catalog banner"/>
                <Container maxWidth="lg">
                    <CatalogComponent/>
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default Catalog;