import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Categories from '../../components/Categories';
import Header from '../../components/Header/Header';
import ProductsContainer from '../../components/ProductsContainer';
import Search from '../../components/Search';
import './index.css';

const Home = () => {
  const { hasSearch } = useContext(AppContext);

  document.title = 'E-commerce | Home';

  return (
    <div className="home-page">
      <Header />
      <div className="container">
        <div className="right">
          <Search />
          {
            hasSearch && (
              <ProductsContainer />
            )
          }
        </div>

        <div className="left">
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Home;
