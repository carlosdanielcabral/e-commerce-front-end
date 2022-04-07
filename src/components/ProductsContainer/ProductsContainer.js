import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import ProductCard from '../ProductCart';
import './index.css';

const ProductsContainer = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="products-container">
      {
        products.map((product) => (
          <ProductCard
            key={ product.id }
            id={ product.id }
            title={ product.title }
            image={ product.thumbnail }
            price={ product.price }
          />
        ))
      }
    </div>
  );
}

export default ProductsContainer;
