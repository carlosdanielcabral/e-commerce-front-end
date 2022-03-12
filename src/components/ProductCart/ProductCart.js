import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = ({ id, title, image, price }) => {
  const addToCart = ({ target }) => {
    const { id } = target;

    const products = [localStorage.getItem('shoppingCart')];
    if (products[0]) {
      const product = [...products, id];
      localStorage.setItem('shoppingCart', product);
    } else {
      localStorage.setItem('shoppingCart', id);
    }
  }

  return (
    <div className="product-card">
      <Link to={ `/product/${id}` }>
        <div>
          <div className="image">
            <img src={ image } alt={ title } />
          </div>

          <section className="description">
            <h2 className="title">
              { title }
            </h2>

            <h3 className="price">
              { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            </h3>
          </section>

        </div>
      </Link>
      <button
        type="button"
        id={ id }
        onClick={ addToCart }
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
