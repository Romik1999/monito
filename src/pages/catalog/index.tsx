import React from 'react';
import Container from "@mui/material/Container";
import CatalogComponent from "../../components/catalog/CatalogComponent";
import Banner from "../../components/Banner";

const Catalog = () => {
    return (
        <>
            <Banner/>
            <Container maxWidth="lg">
                <CatalogComponent/>
            </Container>
        </>
    );
};

export default Catalog;