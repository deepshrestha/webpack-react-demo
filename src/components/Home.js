import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Footer from './Footer';
import List from './customer/List'
import Add from './customer/Add'

const Home = () => {
    return(
        <Router>
            <Navbar />            
            <Menu />
                <Route path="/customer/list" component={List} />
                <Route path="/customer/add" component={Add} />
            <Footer />
        </Router>
    );
}

export default Home;