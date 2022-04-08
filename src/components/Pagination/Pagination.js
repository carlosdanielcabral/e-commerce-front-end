import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import ProductsContainer from '../ProductsContainer';

const Pagination = () => {
  const { products } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(products.length / 12);
  console.log(`Number of pages: ${numberOfPages}\nProduct's length: ${products.length}`);
  const buttons = [];
  
  for (let i = 0; i < numberOfPages; i += 1) {
    buttons.push(i + 1);
    // console.log(buttons);
  }

  const startIndex = (currentPage - 1) * 12;

  let currentProducts = products.slice(startIndex,  startIndex + 11);
  console.log(currentProducts.length);

  return (
    <>
      <ProductsContainer products={ currentProducts } />
      <section className="pages">
        {
          buttons.map((button) => (
            <button
              type="button"
              key={ `page${button}` }
              onClick={ () => setCurrentPage(button) }
            >
              { button }
            </button>
          ))
        }
      </section>
    </>
  );
}

export default Pagination;
