import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import  HomePage from './components/pages/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';



function App() {
  return (
    <Router>
    <div>
      <NavBar/>
         <Routes>
           <Route exact path='/' element ={<HomePage />} />
           <Route exact path='/about' element ={<AboutPage />} />
           <Route exact path='/contact' element ={<ContactPage />} />
           <Route  path= "*" element ={<PageNotFound />} />
         </Routes>
    </div>
    </Router>
  );
}

export default App;
