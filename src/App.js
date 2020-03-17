import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


class App extends Component {
    render() {
        return ( 
          <React.Fragment>
            <Navbar/>
                <Switch>
                    <Route exact path="/" component={Productlist}/>
                    <Route path="/Detail" component={Detail}/>
                    <Route path="/Cart" component={Cart}/>
                    <Route component={Default}/>
                </Switch>
                <Modal/>
          </React.Fragment>
        );
    }
}

export default App;
