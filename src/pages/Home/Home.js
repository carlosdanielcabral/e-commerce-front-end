import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Categories from '../../components/Categories';
import Header from '../../components/Header/Header';
import Filters from '../../components/Filters';
import ProductsContainer from '../../components/ProductsContainer';
import './index.css';

const Home = () => {
  const { hasSearch, darkMode } = useContext(AppContext);

  document.title = 'E-commerce | Home';

  return (
    <div className={ `home-page ${darkMode && 'darkmode'}` }>
      <Header />
      <div className="container">
        <div className="right">
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
