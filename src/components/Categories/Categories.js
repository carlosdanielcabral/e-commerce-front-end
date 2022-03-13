import React, { useContext, useEffect, useState } from 'react';
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
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove(selected);
    }
  }

  return (
    <aside className={ `categories ${darkMode && 'darkmode'}` }>
      {
        categories.map(({ name, id }) => (
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
        ))
      }
    </aside>
  );
}

export default Categories;
