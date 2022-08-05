import React from 'react';
import Navbar from "../Component/Layout/navbar";
import Footer from "../Component/Layout/Footer";

const HomeLayout = ({children}) => {
    return (
        <section id={"homeLayout"}>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </section>
    );
};

export default HomeLayout;