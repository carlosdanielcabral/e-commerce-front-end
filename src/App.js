import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Provider from './context/Provider';
import Authentication from './pages/Authentication';
import Principal from './pages/Principal';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import CheckoutPage from './pages/CheckoutPage';

const App = () => (
  <Provider>
    <Switch>
      <Route exact path="/" component={ Principal } />
      <Route path="/authentication/:action" component={ Authentication } />
      <Route exact path="/search-products" component={ Home } />
      <Route path="/product/:productId" component={ ProductDetail } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/checkout" component={ CheckoutPage } />
    </Switch>
  </Provider>
);

export default App;
