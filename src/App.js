import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/product_list';
import Details from './components/details';
import Cart from './components/Cart';
import Default from './components/default';
import {Switch, Route} from 'react-router-dom';
import Modal from './components/modal';

class App extends Component {
  render() {
    return (
      <Fragment> 
          <Navbar />

          <Switch>
              <Route path='/' component={ProductList} exact />
              <Route path='/details' component={Details} />
              <Route path='/cart' component={Cart} />
              <Route component={Default} />
          </Switch>
          <Modal />
      </Fragment>
    );
  }
}

export default App;
