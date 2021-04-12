import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
//import List from './containers/CustomerContainer'
import List from './containers/HooksCustomerContainer'
import Add from './components/customer/Add'

const App = () => {
    return(
        <Router>           
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home">
                    <Redirect to="/customer/list" />
                </Route>
                <Route path="/customer/:slug">
                    <Home>
                        <Navbar />     
                        <Menu />
                            <Route path="/customer/list" component={List} />
                            <Route path="/customer/add" component={Add} />
                        <Footer />
                    </Home>
                </Route>
                <Route path="*" render={() => <div>Page not found!</div>} />
            </Switch>            
        </Router>
    );
}

export default App;