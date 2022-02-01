import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCart';
import './index.css';

class ProductsContainer extends React.Component {
  render() {
    const { products } = this.props;
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
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
  ])).isRequired,
};

export default ProductsContainer;
