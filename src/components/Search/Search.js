import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import './index.css';

class Search extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);

    this.state = {
      inputValue: '',
      redirect: false,
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  redirect(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    const { inputValue, redirect } = this.state;
    const { searchProducts } = this.props;
    if (redirect) return <Redirect to="/shopping-cart" />;
    return (
      <div className="search">
        <form>
          <input
            type="text"
            value={ inputValue }
            name="inputValue"
            placeholder="Digite aqui"
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            id={ inputValue }
            onClick={ searchProducts }
          >
            Pesquisar
          </button>
        </form>

        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};

export default Search;
