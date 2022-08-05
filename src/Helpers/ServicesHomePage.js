import React from 'react';
import HomeLayout from "./HomeLayout";
import ServicesHome from "../Pages/ServicesPage/ServicesHome";
import Jurisprudence from "../Pages/ServicesPage/Jurisprudence";
import Educational from "../Pages/ServicesPage/Education";
import International from "../Pages/ServicesPage/International";
import Tourism from "../Pages/ServicesPage/Tourism";

const ServicesHomePage = () => {
    return (
        <HomeLayout>
            <ServicesHome/>
            <Jurisprudence/>
            <Educational/>
            <International/>
            <Tourism/>
        </HomeLayout>
    );
};

export default ServicesHomePage;