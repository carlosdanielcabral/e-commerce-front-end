import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { getCategories, getProductsByCategory,
  getProductsFromCategoryAndQuery } from '../../services/api';
import './index.css';

const Categories = () => {
  const {
    setProducts,
    setHasSearch,
    query,
    setCategory,
    darkMode,
  } = useContext(AppContext);

  const [categories, setCategories] = useState([]);
  const { push } = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    const getCategory = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };

    getCategory();
  }, [setCategories]);

  const selectCategory = async (e) => {
    e.preventDefault();
    setCategory(e.target.id);
    let data ;
    if (query) {
      data = await getProductsFromCategoryAndQuery(e.target.id, query);
    } else {
      data = await getProductsByCategory(e.target.id);
    }
    setProducts(data.results);
    setHasSearch(true);
    if (pathname.includes('products')) {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      const marked = document.querySelector(`#${e.target.id}`);
      marked.classList.add('selected');
    }
  }

  return (
    <aside className={ `categories ${darkMode && 'darkmode'}` }>
      {
        categories.map(({ name, id }) => (
          pathname.includes('search')
            ? (
              <button
                type="button"
                key={ id }
                data-testid="category"
                className={ `category` }
                id={ id }
                onClick={ selectCategory }
              >
                {name}
              </button>
            )
            : (
              <button
                type="button"
                key={ id }
                data-testid="category"
                className={ `category` }
                id={ id }
                onClick={ (e) => {
                  selectCategory(e) 
                  push('/search-products')
                } }
              >
                {name}
              </button>
            )
        ))
      }
    </aside>
  );
}

export default Categories;
