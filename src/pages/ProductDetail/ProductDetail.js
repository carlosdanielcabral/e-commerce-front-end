/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../../services/api';
import Header from '../../components/Header';
import Gallery from '../../components/Gallery';
import './index.css';

class ProductDetail extends React.Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { productId } } } = this.props;
    const product = await getProductById(productId);
    this.setState({ product });
    document.title = product.title;
  }

  addToCart = ({ target }) => {
    const { id } = target;

    const products = [localStorage.getItem('shoppingCart')];
    if (products[0]) {
      const product = [...products, id];
      localStorage.setItem('shoppingCart', product);
    } else {
      localStorage.setItem('shoppingCart', id);
    }
  }

  render() {
    const { product } = this.state;
    const { id, title, price, pictures } = product;
    return (
      <>
        <Header />
        <div className="product-detail-page container">
          <h2>
            { title }
          </h2>

          <div className="container-flex">
            <div className="product-image">
              { pictures && <Gallery pictures={ pictures } /> }
            </div>

            <div className="product-data">
              <h3>Informações</h3>
              <p className="price">
                { price && (
                  price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })) }
              </p>
              <button
                type="button"
                id={ id }
                onClick={ this.addToCart }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>

          {/* <h3>Avaliações do produto</h3>

          <form>
            <input type="text" placeholder="Digite seu email" />

            <div className="rate">
              <label htmlFor="1">
                <span className="material-icons">
                  star_rate
                </span>

                <input type="radio" name="rate" id="1" hidden />
              </label>

              <label htmlFor="2">
                <span className="material-icons">
                  star_rate
                </span>

                <input type="radio" name="rate" id="2" hidden />
              </label>

              <label htmlFor="3">
                <span className="material-icons">
                  star_rate
                </span>

                <input type="radio" name="rate" id="3" hidden />
              </label>

              <label htmlFor="4">
                <span className="material-icons">
                  star_rate
                </span>

                <input type="radio" name="rate" id="4" hidden />
              </label>

              <label htmlFor="5">
                <span className="material-icons">
                  grade
                </span>

                <input type="radio" name="rate" id="5" hidden />
              </label>
            </div>
          </form> */}
        </div>
      </>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ])).isRequired,
};

export default ProductDetail;
