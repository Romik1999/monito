import React from 'react';
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import Container from "@mui/material/Container";
import CatalogComponent from "../../components/catalog/CatalogComponent";
import catalogBanner from "../../assets/images/catalog/catalog-banner-big.png";

const Catalog = () => {
    return (
        <>
            <img src={catalogBanner} alt="catalog banner"/>
            <Container maxWidth="lg">
                <CatalogComponent/>
            </Container>
        </>
    );
};

export default Catalog;