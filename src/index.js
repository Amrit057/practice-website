import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Copyright from './components/copyright';
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Footer />
        <Copyright />
    </BrowserRouter>


);


