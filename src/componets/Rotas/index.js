import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from '../pages/Home/index'
import Company from '../pages/Company';
import Contact from '../pages/Contact';
import NewProject from "../pages/NewProject";

const Rotas = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route path='/company' Component={Company} />
                    <Route path='/contact' Component={Contact} />
                    <Route path='/newproject' Component={NewProject} />
                </Routes>
            </BrowserRouter>
            <ul>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        

        
    )

}
export default Rotas;