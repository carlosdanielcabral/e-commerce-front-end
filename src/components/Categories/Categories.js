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
    category,
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
                className={ `category ${category === id && 'selected'}` }
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
                className={ `category ${category === id && 'selected'}` }
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
