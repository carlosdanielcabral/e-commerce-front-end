import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import CheckoutPage from './pages/CheckoutPage';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/product/:productId" component={ ProductDetail } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/checkout" component={ CheckoutPage } />
      </Switch>
    );
  }
}

export default App;
