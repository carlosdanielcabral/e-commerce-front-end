import React from 'react';
import Categories from '../../components/Categories';
import Header from '../../components/Header/Header';
import ProductsContainer from '../../components/ProductsContainer';
import Search from '../../components/Search';
import { getProductsByQuery,
  getProductsByCategory,
  getProductsFromCategoryAndQuery } from '../../services/api';
import './index.css';

class Home extends React.Component {
  constructor() {
    super();

    this.searchProducts = this.searchProducts.bind(this);
    this.searchProductsByCategory = this.searchProductsByCategory.bind(this);

    this.state = {
      hasSearch: false,
      products: [],
      query: '',
    };
  }

  componentDidMount() {
    document.title = 'E-commerce | Home';
  }

  async searchProducts(event) {
    event.preventDefault();
    const { id } = event.target;
    const response = await getProductsByQuery(id);
    const products = await response.results;
    this.setState({ products, hasSearch: true, query: id });
  }

  async searchProductsByCategory(event) {
    const { id } = event.target;
    const { query } = this.state;
    let products = [];
    if (query) {
      const response = await getProductsFromCategoryAndQuery(id, query);
      products = await response.results;
    } else {
      const response = await getProductsByCategory(id);
      products = await response.results;
    }

    const categories = document.getElementsByClassName('category');
    const selected = Array.from(categories).find((category) => (
      category.classList.contains('selected')));
    if (selected !== undefined) {
      selected.classList.remove('selected');
      const category = document.getElementById(id);
      category.classList.add('selected');
    } else {
      const category = document.getElementById(id);
      category.classList.add('selected');
    }
    this.setState({ products, hasSearch: true });
  }

  clearResults = () => {
    this.setState({ products: [] });
    const categories = document.getElementsByClassName('category');
    const selected = Array.from(categories).find((category) => (
      category.classList.contains('selected')));
    if (selected !== undefined) selected.classList.remove('selected');
  }

  render() {
    const { hasSearch, products } = this.state;
    return (
      <div className="home-page">
        <Header />
        <div className="container">
          <div className="right">
            <Search searchProducts={ this.searchProducts } clearResults={ this.clearResults } />
            {
              hasSearch && (
                <ProductsContainer products={ products } />
              )
            }
          </div>

          <div className="left">
            <Categories searchProductsByCategory={ this.searchProductsByCategory } />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
