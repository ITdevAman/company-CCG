import React from 'react';
import HomeLayout from "./HomeLayout";
import Home from "../Pages/HomePage/Home";
import OurServices from "../Pages/HomePage/OurServices/OurServices";
import AboutCompany from "../Pages/HomePage/AboutCompany/AboutCompany";
import OurTeam from "../Pages/HomePage/OurTeam/OurTeam.js";
import News from "../Pages/HomePage/News/News";
import OurTestimonials from "../Pages/HomePage/OurTestimonials/OurTestimonials";
import OurAddress from "../Pages/HomePage/OurAddress";
import OurMission from "../Pages/HomePage/OurMission";
import OurCoal from "../Pages/HomePage/OurCoal";

const HomePage = () => {
    return (
        <HomeLayout>
            <Home/>
            <AboutCompany/>
            <OurMission/>
            <OurCoal/>
            <OurServices/>
            <News slice={3}/>
            <OurTeam />
            <OurTestimonials />
            <OurAddress />
        </HomeLayout>
    );
};

export default HomePage;