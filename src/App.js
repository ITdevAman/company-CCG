import React from 'react';
import {Routes , Route} from "react-router-dom";
import HomePage from "./Helpers/HomePage";
import ServicesHomePage from "./Helpers/ServicesHomePage";


const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/services"} element={<ServicesHomePage/>}/>
        </Routes>
    );
};

export default App;