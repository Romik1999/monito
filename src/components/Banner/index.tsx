import React from 'react';
import catalogBanner from "../../assets/images/catalog/catalog-banner-big.png";
import {
    BannerImg

} from "./styled";
import Container from "@mui/material/Container";

const Banner = () => {
    return (
        <section>
            <Container maxWidth="lg">
                <BannerImg>
                    <img src={catalogBanner} alt="catalog banner"/>
                </BannerImg>
            </Container>
        </section>
    );
};

export default Banner;