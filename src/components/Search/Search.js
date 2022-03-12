import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { getProductsByQuery, getProductsFromCategoryAndQuery } from '../../services/api';
import './index.css';

const Search = () => {
  const {
    category,
    setHasSearch,
    setProducts,
    query,
    setQuery,
  } = useContext(AppContext);

  const searchProducts = async (e) => {
    e.preventDefault();
    let data;
    if (category) {
      data = await getProductsFromCategoryAndQuery(category, query);
    } else {
      data = await getProductsByQuery(query);
    }
    setProducts(data.results);
    setHasSearch(true);
  }

  const clearResults = () => setProducts([]);

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={ query }
          name="inputValue"
          placeholder="Digite aqui"
          onChange={ (e) => setQuery(e.target.value) }
        />

        <button
          type="submit"
          onClick={ searchProducts }
        >
          Pesquisar
        </button>
        <button
          type="button"
          onClick={ clearResults }
          className="clear-results"
        >
          Limpar
        </button>
      </form>

      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    </div>
  );
}

export default Search;
