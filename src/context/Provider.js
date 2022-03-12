import React, { useState } from 'react';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [category, setCategory] = useState('')
  const [hasSearch, setHasSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const context = {
    category,
    setCategory,
    hasSearch,
    setHasSearch,
    products,
    setProducts,
    query,
    setQuery,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
