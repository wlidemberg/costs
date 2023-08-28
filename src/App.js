
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componets/pages/Home';
import Company from './componets/pages/Company';
import NewProject from "./componets/pages/NewProject";
import Projects from "./componets/pages/Projects";
import Contact from "./componets/pages/Contact";

// IMPORTAÇÃO DOS LAYOUTS
import Container from "./componets/layout/Container";
import NavBar from "./componets/layout/NavBar";
import Footer from "./componets/layout/Footer";




function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter>
          <div>
            <NavBar/>
          </div>
            <Container>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/company' element={<Company />} />
                <Route path='/newproject' element={<NewProject/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='contact' element={<Contact/>} />
              </Routes>
            </Container>
          </BrowserRouter> 
          <div>
            <Footer />  
          </div>   
      </div>
      
    </div>
  );
}

export default App;
