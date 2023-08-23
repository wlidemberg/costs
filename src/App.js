
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from './componets/pages/Home';
import Company from './componets/pages/Company';
import NewProject from "./componets/pages/NewProject";
import Contact from "./componets/pages/Contact";
import Container from "./componets/layout/Container";



function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/company'>Company</Link>
            <Link to='newproject'>New Project</Link>
            <Link to='contact'>Contact</Link>
          </div>
            <Container custonClass='min-heigth'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/company' element={<Company />} />
                <Route path='/newproject' element={<NewProject/>} />
                <Route path='contact' element={<Contact/>} />
              </Routes>
            </Container>
          </BrowserRouter>    
      </div>
      <p>FOOTER</p>
    </div>
  );
}

export default App;
