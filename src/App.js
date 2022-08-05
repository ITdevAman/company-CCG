import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import HomePage from "./Helpers/HomePage";
import ServicesHomePage from "./Helpers/ServicesHomePage";


const App = () => {
    const location = useLocation();
    const scroolTop = () => {
      window.scrollTo({
          left : 0,
          top : 0,
          behavior: "smooth"
      })
    }
    useEffect(()=>{
        scroolTop()
    }, [location.pathname])

    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/services"} element={<ServicesHomePage/>}/>
        </Routes>
    );
};

export default App;