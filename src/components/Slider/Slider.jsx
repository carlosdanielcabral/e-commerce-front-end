import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './index.css';

const Slider = ({ products }) => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="slider">
      {
        products.map((product) => {
          return (
            <div className={ `product ${darkMode && 'darkmode'}` }>
              <Link to={ `/product/${product.id}` } >
                <div className="product-header">
                  <img src={ product.thumbnail } alt="image" />
                </div>

                <div className="product-title">
                  <h3>{ product.title }</h3>
                </div>

                <div className="price">
                  <h3>
                    { product.price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }) }
                  </h3>
                </div>
              </Link>
            </div>
          );
        })
      }
    </div>
  )
} 

export default Slider;
